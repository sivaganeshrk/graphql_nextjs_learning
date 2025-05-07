'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date()
    const authors = [
      {id:'01JTJD15YD180D36HC6F16YTRE', name: 'George Orwell', biography: 'Known for dystopian novels.', born_date: new Date('1903-06-25'), createdAt: now, updatedAt: now },
      {id:'01JTJD15YF1TQ6BQ5NA94221QE', name: 'Jane Austen', biography: 'English novelist.', born_date: new Date('1775-12-16'), createdAt: now, updatedAt: now },
      {id:'01JTJD15YF3K5Y9V3RA0RSDPCP', name: 'Mark Twain', biography: 'American writer, humorist.', born_date: new Date('1835-11-30'), createdAt: now, updatedAt: now },
      {id:'01JTJD15YFZBFMTV2JH2BP1RFC', name: 'Haruki Murakami', biography: 'Japanese novelist.', born_date: new Date('1949-01-12'), createdAt: now, updatedAt: now },
      {id:'01JTJD15YF7NWV80TTPSMT19VT', name: 'Virginia Woolf', biography: 'English modernist writer.', born_date: new Date('1882-01-25'), createdAt: now, updatedAt: now },
      {id:'01JTJD15YFP62ZA92Y3K4YRJE8', name: 'Gabriel García Márquez', biography: 'Colombian novelist.', born_date: new Date('1927-03-06'), createdAt: now, updatedAt: now },
      {id:'01JTJD15YF4J1T3QEXE08QYG8G', name: 'F. Scott Fitzgerald', biography: 'American novelist.', born_date: new Date('1896-09-24'), createdAt: now, updatedAt: now },
      {id:'01JTJD15YFM94NEJA6FG7DFBGH', name: 'Leo Tolstoy', biography: 'Russian writer.', born_date: new Date('1828-09-09'), createdAt: now, updatedAt: now },
      {id:'01JTJD15YFZAE8VS55TTZG5NRM', name: 'Isabel Allende', biography: 'Chilean-American writer.', born_date: new Date('1942-08-02'), createdAt: now, updatedAt: now },
      {id:'01JTJD15YG76TPAGXJC3QVBD56', name: 'Ernest Hemingway', biography: 'American novelist and short story writer.', born_date: new Date('1899-07-21'), createdAt: now, updatedAt: now},
    ]

    await queryInterface.bulkInsert('author',authors)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('author',null)
  }
};
