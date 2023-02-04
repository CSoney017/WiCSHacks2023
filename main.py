from tkinter import *
import csv

def printData():
    with open('pers_data.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
        for row in spamreader:
            print(row)

def writeData(date, cat, ti, to, et,  well, notes):
    with open('pers_data.csv', newline='') as csvfile:
        ##row = str(date)+' '+cat+' '+str(ti)+' '+str(to)+' '+str(et)+' '+str(well)+' '+notes
        csvWriter = csv.writer(csvfile, delimiter=' ', quotechar='|')
        csvWriter.writerow([date, cat, ti, to, et, well, notes])









