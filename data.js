const data = [
    {
      "id": 1,
      "name": "Nam Mug",
      "price": 83000,
      "image": "products/gelas 1.jpg",
      "detail": "details/gelas 1.jpg",
      "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      "isDeleted": false,
      "category": "Mug",
      "expiryDate": "2022-07-24"
    },
    {
      "id": 2,
      "name": "Viary Mug",
      "price": 149000,
      "image": "products/gelas 2.jpg",
      "detail": "details/gelas 2.jpg",
      "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      "isDeleted": false,
      "category": "Mug",
      "expiryDate": null
    },
    {
      "id": 3,
      "name": "Apollo Mug",
      "price": 181000,
      "image": "products/gelas 3.jpg",
      "detail": "details/gelas 3.jpg",
      "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      "isDeleted": false,
      "category": "Mug",
      "expiryDate": "2022-10-04"
    },
    {
      "id": 4,
      "name": "REN Mug",
      "price": 45000,
      "image": "products/gelas 4.jpg",
      "detail": "details/gelas 4.jpg",
      "description": "Fusce consequat. Nulla nisl. Nunc nisl. Fusce consequat. Cras non velit nec nisi vulputate nonummy.",
      "isDeleted": false,
      "category": "Mug",
      "expiryDate": null
    },
    {
      "id": 5,
      "name": "Envy Mug",
      "price": 199000,
      "image": "products/gelas 5.jpg",
      "detail": "details/gelas 5.jpg",
      "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
      "isDeleted": false,
      "category": "Mug",
      "expiryDate": null
    },
    {
      "id": 6,
      "name": "Mord Mug",
      "price": 487000,
      "image": "products/gelas 6.jpg",
      "detail": "details/gelas 6.jpg",
      "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu.",
      "isDeleted": false,
      "category": "Mug",
      "expiryDate": "2022-12-09"
    },
    {
      "id": 7,
      "name": "Hero Mug",
      "price": 451000,
      "image": "products/gelas 7.jpg",
      "detail": "details/gelas 7.jpg",
      "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      "isDeleted": false,
      "category": "Mug",
      "expiryDate": "2022-11-04"
    },
    {
      "id": 8,
      "name": "Ttier Mug",
      "price": 51000,
      "image": "products/gelas 8.jpg",
      "detail": "details/gelas 8.jpg",
      "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      "isDeleted": false,
      "category": "Mug",
      "expiryDate": null
    },
    {
      "id": 9,
      "name": "Jaay Plate",
      "price": 62000,
      "image": "products/piring 1.jpg",
      "detail": "details/piring 1.jpg",
      "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      "isDeleted": false,
      "category": "Plate",
      "expiryDate": "2022-05-09"
    },
    {
      "id": 10,
      "name": "Sunoo Plate",
      "price": 105000,
      "image": "products/piring 2.jpg",
      "detail": "details/piring 2.jpg",
      "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      "isDeleted": false,
      "category": "Plate",
      "expiryDate": "2022-12-23"
    },
    {
      "id": 11,
      "name": "Heese Plate",
      "price": 292000,
      "image": "products/piring 3.jpg",
      "detail": "details/piring 3.jpg",
      "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu.",
      "isDeleted": false,
      "category": "Plate",
      "expiryDate": null
    },
    {
      "id": 12,
      "name": "Migyu Plate",
      "price": 289000,
      "image": "products/piring 4.jpg",
      "detail": "details/piring 4.jpg",
      "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus.",
      "isDeleted": false,
      "category": "Plate",
      "expiryDate": "2022-06-18"
    },
    {
      "id": 13,
      "name": "Chaan Plate",
      "price": 93000,
      "image": "products/piring 5.jpg",
      "detail": "details/piring 5.jpg",
      "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium.",
      "isDeleted": false,
      "category": "Plate",
      "expiryDate": null
    },
    {
      "id": 14,
      "name": "Lojee Plate",
      "price": 492000,
      "image": "products/piring 6.jpg",
      "detail": "details/piring 6.jpg",
      "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      "isDeleted": false,
      "category": "Plate",
      "expiryDate": "2022-09-29"
    },
    {
      "id": 15,
      "name": "Hueni Teapot",
      "price": 21000,
      "image": "products/teko 1.jpg",
      "detail": "details/teko 1.jpg",
      "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "isDeleted": false,
      "category": "Teapot",
      "expiryDate": null
    },
    {
      "id": 16,
      "name": "Beoom Teapot",
      "price": 447000,
      "image": "products/teko 2.jpg",
      "detail": "details/teko 2.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      "isDeleted": false,
      "category": "Teapot",
      "expiryDate": "2022-12-17"
    },
    {
      "id": 17,
      "name": "Oobin Teapot",
      "price": 277000,
      "image": "products/teko 3.jpg",
      "detail": "details/teko 3.jpg",
      "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum.",
      "isDeleted": false,
      "category": "Teapot",
      "expiryDate": null
    },
    {
      "id": 18,
      "name": "Yonj Teapot",
      "price": 150000,
      "image": "products/teko 4.jpg",
      "detail": "details/teko 4.jpg",
      "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget.",
      "isDeleted": false,
      "category": "Teapot",
      "expiryDate": "2022-05-18"
    },
    {
      "id": 19,
      "name": "Scoups Teapot",
      "price": 76000,
      "image": "products/teko 5.jpg",
      "detail": "details/teko 5.jpg",
      "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      "isDeleted": false,
      "category": "Teapot",
      "expiryDate": null
    },
    {
      "id": 20,
      "name": "DK Teapot",
      "price": 367000,
      "image": "products/teko 6.jpg",
      "detail": "details/teko 6.jpg",
      "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      "isDeleted": false,
      "category": "Teapot",
      "expiryDate": "2022-06-05"
    }
  ]

  export default data;