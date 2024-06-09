import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createUser(username: string, email: string, password: string) {
	try {
		const result = await prisma.user.create({
			data: {
				username,
				email,
				password,
			},
		});
		console.log({ result });
	} catch (error) {
		console.log('error, ', error);
	}
}

async function getTodo(id: number) {
	try {
		const result = await prisma.todos.findMany({
			where: {
				userId: id,
			},
		});
		console.log(result);
	} catch (error) {
		console.log(error);
	}
}

// createUser('djfk12d', 'dk23fj@test.com', 'dkfa23j');
getTodo(1);
