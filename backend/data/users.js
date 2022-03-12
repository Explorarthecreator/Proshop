import bcyprt from  'bcryptjs'

const users = [
    {
        name : 'Admin user',
        userEmail: 'admin@example.com',
        password: bcyprt.hashSync('12323',10),
        isAdmin: true
    },
    {
        name : 'John user',
        userEmail: 'john@example.com',
        password: bcyprt.hashSync('1323',10),
    },
    {
        name : 'Ella user',
        userEmail: 'ella@example.com',
        password: bcyprt.hashSync('1223',10),
    }
]

export default users