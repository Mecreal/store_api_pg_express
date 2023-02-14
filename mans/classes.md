
        async create(p: Product): Promise {
          const conn = await Client.connect()
          const sql = 'INSERT INTO products (name, price) VALUES($1, $2) RETURNING *'
          const result = await conn .query(sql, [p.name, p.price]
          const product = result.rows[0]
          conn.release()
          return product
        }

        async delete(id: string): Promise {
          const conn = await Client.connect()
          const sql = 'DELETE FROM products WHERE id=($1)'
          const result = await conn.query(sql, [id])
        }








// @ts-ignore
import client from "../database";

export type Book ={
     id: number;
     title: string;
     author: string;
     totalPages: number;
     summary: string;
}


export class bookStore{
    async index():Promise<Book[]> {
        try{
            const conn = await client.connect();
            const sql = 'SELECT * from books';
            const result = await conn.query(sql);
            conn.release();
            return result.rows; 
        }catch(err){
            throw new Error(`Error ${err}`);
            
        }
    }
    async create(p:Book):Promise {
        try{
            const conn = await client.connect();
            const sql = 'INSERT INTO books (title, authors,totalPages,summary) VALUE ($1,$2,$3,$4) RETURNING *';
            const result = await conn.query(sql,[p.title,p.author,p.totalPages,p.summary]);
            const book = result.rows[0];
            conn.release();
            return book
        }catch(err){
            throw new Error(`Error ${err}`);
            
        }
    }
   async delete(id: string): Promise {
       try{
           const conn = await client.connect()
           const sql = 'DELETE FROM books WHERE id=($1)'
           const result = await conn.query(sql, [id])
           }catch(err){
            throw new Error(`Error ${err}`);
            
        }
    }
    async update(p:Book): Promise {
        try{
           const conn = await client.connect()
           const sql = 'UPDATE books SET title=$2,author=$3,totalPages=$4,summary=$5 WHERE id=($1) RETURNING *';
           const result = await conn.query(sql,[p.id,p.title,p.author,p.totalPages,p.summary]);
            const book = result.rows[0];
            conn.release();
            return book
        }catch(err){
            throw new Error(`Error ${err}`);
            
        }
    }
}


# CRUD


// @ts-ignore
import Client from '../database'

export type Book = {
     id: number;
     title: string;
     author: string;
     totalPages: number;
     summary: string;
}

export class BookStore {
  async index(): Promise<Book[]> {
    try {
      // @ts-ignore
      const conn = await Client.connect()
      const sql = 'SELECT * FROM books'

      const result = await conn.query(sql)

      conn.release()

      return result.rows 
    } catch (err) {
      throw new Error(`Could not get books. Error: ${err}`)
    }
  }

  async show(id: string): Promise<Book> {
    try {
    const sql = 'SELECT * FROM books WHERE id=($1)'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    conn.release()

    return result.rows[0]
    } catch (err) {
        throw new Error(`Could not find book ${id}. Error: ${err}`)
    }
  }

  async create(b: Book): Promise<Book> {
      try {
    const sql = 'INSERT INTO books (title, author, total_pages, summary) VALUES($1, $2, $3, $4) RETURNING *'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn
        .query(sql, [b.title, b.author, b.totalPages, b.summary])

    const book = result.rows[0]

    conn.release()

    return book
      } catch (err) {
          throw new Error(`Could not add new book ${title}. Error: ${err}`)
      }
  }

  async delete(id: string): Promise<Book> {
      try {
    const sql = 'DELETE FROM books WHERE id=($1)'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    const book = result.rows[0]

    conn.release()

    return book
      } catch (err) {
          throw new Error(`Could not delete book ${id}. Error: ${err}`)
      }
  }
}