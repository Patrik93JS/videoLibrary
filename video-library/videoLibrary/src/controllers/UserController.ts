import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

class UserController {
	async createUser(
		req: Request,
		res: Response
	): Promise<void> {
		try {
			const { userName, email, password } =
				req.body;
			const userRepository = getRepository(User);
			const newUser = userRepository.create({
				userName,
				email,
				password,
			});
			await userRepository.save(newUser);
			res.status(201).json(newUser);
		} catch (error) {
			console.error(
				"Error creating user:",
				error
			);
			res.status(500).send("Error creating user");
		}
	}

	async getUsers(
		req: Request,
		res: Response
	): Promise<void> {
		try {
			const userRepository = getRepository(User);
			const users = await userRepository.find();
			res.json(users);
		} catch (error) {
			console.error(
				"Error getting users:",
				error
			);
			res.status(500).send("Error getting users");
		}
	}

	async getUserById(
		req: Request,
		res: Response
	): Promise<void> {
		try {
			const userId = req.params.id;
			const userRepository = getRepository(User);
			const user = await userRepository.findOne({
				where: { id: userId },
			});

			if (!user) {
				res.status(404).send("User not found");
				return;
			}
			res.json(user);
		} catch (error) {
			console.error(
				"Error getting user by id:",
				error
			);
			res
				.status(500)
				.send("Error getting user by id");
		}
	}

	async updateUser(
		req: Request,
		res: Response
	): Promise<void> {
		try {
			const userId = req.params.id;
			const { userName, email, password } =
				req.body;
			const userRepository = getRepository(User);
			const user = await userRepository.findOne({
				where: { id: userId },
			});

			if (!user) {
				res.status(404).send("User not found");
				return;
			}
			user.userName = userName || user.userName;
			user.email = email || user.email;
			user.password = password || user.password;
			await userRepository.save(user);
			res.json(user);
		} catch (error) {
			console.error(
				"Error updating user:",
				error
			);
			res.status(500).send("Error updating user");
		}
	}

	async deleteUser(
		req: Request,
		res: Response
	): Promise<void> {
		try {
			const userId = req.params.id;
			const userRepository = getRepository(User);
			const user = await userRepository.findOne({
				where: { id: userId },
			});

			if (!user) {
				res.status(404).send("User not found");
				return;
			}
			await userRepository.remove(user);
			res.status(204).send();
		} catch (error) {
			console.error(
				"Error deleting user:",
				error
			);
			res.status(500).send("Error deleting user");
		}
	}
}

export default UserController;
