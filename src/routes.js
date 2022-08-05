const { addBookHandler, getAllBookHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler } = require('./handler');
const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBookHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookid}',
        handler: getBookByIdHandler,

    },
    {
        method: 'PUT',
        path: '/books/{bookid}',
        handler: editBookByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookid}',
        handler: deleteBookByIdHandler,
    },
];

module.exports = routes;