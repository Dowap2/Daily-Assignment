const books = {
  Great: {
    name: "Great",
    start: 197001,
    end: 198104,
    outOfPrint: true,
    rating: 3.1,
    count: 2,
    categori: "Novel",
  },
  Laws: {
    name: "Laws",
    start: 198006,
    end: 198507,
    outOfPrint: true,
    rating: 4.8,
    count: 3,
    categori: "Novel",
  },
  Dracula: {
    name: "Dracula",
    start: 199105,
    end: 199605,
    outOfPrint: true,
    rating: 2.3,
    count: 6,
    categori: "Drama",
  },
  Mario: {
    name: "Mario",
    start: 200109,
    end: 201211,
    outOfPrint: true,
    rating: 3.8,
    count: 4,
    categori: "Drama",
  },
  House: {
    name: "House",
    start: 198707,
    end: 999999,
    outOfPrint: false,
    rating: 4.4,
    count: 1,
    categori: "Magazine",
  },
  Art1: {
    name: "Art1",
    start: 198506,
    end: 199107,
    outOfPrint: true,
    rating: 4.2,
    count: 2,
    categori: "Design",
  },
  Art2: {
    name: "Art2",
    start: 199502,
    end: 200512,
    outOfPrint: true,
    rating: 3.0,
    count: 3,
    categori: "Design",
  },
  Wars: {
    name: "Wars",
    start: 198204,
    end: 200305,
    outOfPrint: true,
    rating: 4.6,
    count: 2,
    categori: "Novel",
  },
  Solo: {
    name: "Solo",
    start: 200703,
    end: 999999,
    outOfPrint: false,
    rating: 4.9,
    count: 2,
    categori: "Poem",
  },
  Lost: {
    name: "Lost",
    start: 199806,
    end: 999999,
    outOfPrint: false,
    rating: 3.2,
    count: 8,
    categori: "Web",
  },
  Ocean: {
    name: "Ocean",
    start: 200502,
    end: 202006,
    outOfPrint: true,
    rating: 4.3,
    count: 1,
    categori: "Magazine",
  },
};

function find(param0, param1) {
  const availableBooks = Object.values(books)
    .filter(
      (book) =>
        book.start <= param0 && book.end >= param0 && book.count >= param1
    )
    .sort((a, b) => b.rating - a.rating);

  if (availableBooks.length === 0) {
    console.log("!EMPTY");
    return;
  }

  const result = availableBooks
    .map((book) => {
      const mark = book.outOfPrint ? "*" : "";
      return `${book.name}${mark}(${book.categori}) ${book.rating}`;
    })
    .join(", ");

  console.log(result);
}

find("200008", 6);
