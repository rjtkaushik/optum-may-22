import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getUsers = async  () => {
    const allUsers = await prisma.user.findMany({
        take: 2,
        skip : 4
    })
    console.log(allUsers);
}

const createUser = async () => {
    const createdUser = await prisma.user.create({
        data : {
            name : "NewUser",
            email : "new@test.com",
            password :"new123"
        }
    })
    console.log(createdUser)
}

const main = async () => {
    await prisma.$connect()
    // createUser();
    getUsers()
}

main()