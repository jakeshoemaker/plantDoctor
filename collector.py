import sqlite3
import os
import sys
import datetime
import time
import grovepi
import threading




def main():
    global counter

    plant = "gus"
    now = datetime.datetime.now()
    current_time = now.strftime("%m/%d/%Y, %H:%M")
    # read digital value from pin 1 
    moisture = 100 - (100 * grovepi.analogRead(1)/1023)
    
    # connect to sqlite db, if no db is present then one will be created
    try:
        connection = sqlite3.connect("sensor-data.db")
        # creates the table with correct values
        cursor = connection.cursor()
        print("successfully connected to sensor-data.db")
    except sqlite3.Error as err:
        print("Error when connecting to sqlite: ", err)

    # try and create a table
    try:
        sqlite_create_table = ''' CREATE TABLE IF NOT EXISTS moisture_level (
            plant TEXT NOT NULL, 
            moisture FLOAT NOT NULL,
            time TEXT NOT NULL
            ); '''
        cursor.execute(sqlite_create_table)
        print("sqlite table created")
        
    except sqlite3.Error as err:
        print("Error while creating a sqlite table: ", err)

    # enter data into table
    try:
        sqlite_insert = ''' INSERT INTO moisture_level 
                            (plant, moisture, time)
                            VALUES (?, ?, ?);'''
        
        cursor.execute(sqlite_insert, (plant, moisture, current_time))
        connection.commit()
        print("Successfully entered row into sensor-db")

        # closing connection
        cursor.close()
    except sqlite3.Error as err:
        print("Failed to insert data into sqlite table: ", err)

    finally:
        if (connection):
            connection.close()
            print("sqlite connection has been closed")

    counter += 1
    # timer to read value every fifteen minutes
    threading.Timer(interval=900, function=main).start()


if __name__ == "__main__":
    global counter
    counter = 0
    main()