import psycopg2
import config

class DBHandler():
    def __init__(self):   
        self.con = psycopg2.connect(database="testdb", user="postgres", password="postgres", host=config.db_host, port="5432")
        self.cursor = self.con.cursor()
    
    def get_all_test_rows(self):
        query = "select * from public.testtable"
        self.cursor.execute(query)
        rows = self.cursor.fetchall()
        if len(rows) == 0:
            return []
        return list(rows[0])        
