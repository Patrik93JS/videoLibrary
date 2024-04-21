import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Group } from "../entity/Group";

class GroupController {
	async createGroup(
		req: Request,
		res: Response
	): Promise<void> {
		try {
			const { groupName, videos } = req.body;
			const groupRepository =
				getRepository(Group);
			const newGroup = groupRepository.create({
				groupName,
				videos,
			});
			await groupRepository.save(newGroup);
			res.status(201).json(newGroup);
		} catch (error) {
			console.error(
				"Error creating group:",
				error
			);
			res
				.status(500)
				.send("Error creating group");
		}
	}

	async getGroups(
		req: Request,
		res: Response
	): Promise<void> {
		try {
			const groupRepository =
				getRepository(Group);
			const groups = await groupRepository.find();
			res.json(groups);
		} catch (error) {
			console.error(
				"Error getting groups:",
				error
			);
			res
				.status(500)
				.send("Error getting groups");
		}
	}

	async getGroupById(
		req: Request,
		res: Response
	): Promise<void> {
		try {
			const groupId = req.params.id;
			const groupRepository =
				getRepository(Group);
			const group = await groupRepository.findOne(
				{
					where: {
						id: groupId,
					},
				}
			);
			if (!group) {
				res.status(404).send("Group not found");
				return;
			}
			res.json(group);
		} catch (error) {
			console.error(
				"Error getting group by id:",
				error
			);
			res
				.status(500)
				.send("Error getting group by id");
		}
	}

	async updateGroup(
		req: Request,
		res: Response
	): Promise<void> {
		try {
			const groupId = req.params.id;
			const { groupName, videos } = req.body;
			const groupRepository =
				getRepository(Group);
			const group = await groupRepository.findOne(
				{
					where: {
						id: groupId,
					},
				}
			);
			if (!group) {
				res.status(404).send("Group not found");
				return;
			}
			group.groupName =
				groupName || group.groupName;
			group.videos = videos || group.videos;
			await groupRepository.save(group);
			res.json(group);
		} catch (error) {
			console.error(
				"Error updating group:",
				error
			);
			res
				.status(500)
				.send("Error updating group");
		}
	}

	async deleteGroup(
		req: Request,
		res: Response
	): Promise<void> {
		try {
			const groupId = req.params.id;
			const groupRepository =
				getRepository(Group);
			const group = await groupRepository.findOne(
				{
					where: {
						id: groupId,
					},
				}
			);
			if (!group) {
				res.status(404).send("Group not found");
				return;
			}
			await groupRepository.remove(group);
			res.status(204).send();
		} catch (error) {
			console.error(
				"Error deleting group:",
				error
			);
			res
				.status(500)
				.send("Error deleting group");
		}
	}
}

export default GroupController;
