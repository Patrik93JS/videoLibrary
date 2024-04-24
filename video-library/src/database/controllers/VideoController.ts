import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Video } from "../entity/Video";

export class VideoController {
	async createVideo(
		req: Request,
		res: Response
	): Promise<void> {
		try {
			const {
				title,
				description,
				groupName,
				userName,
				userId,
			} = req.body;
			const videoRepository =
				getRepository(Video);
			const newVideo = videoRepository.create({
				title,
				description,
				groupName,
				userName,
				userId,
			});
			await videoRepository.save(newVideo);
			res.status(201).json(newVideo);
		} catch (error) {
			console.error(
				"Error creating video:",
				error
			);
			res
				.status(500)
				.send("Error creating video");
		}
	}

	async getVideos(
		req: Request,
		res: Response
	): Promise<void> {
		try {
			const videoRepository =
				getRepository(Video);
			const videos = await videoRepository.find();
			res.json(videos);
		} catch (error) {
			console.error(
				"Error getting videos:",
				error
			);
			res
				.status(500)
				.send("Error getting videos");
		}
	}

	async getVideoById(
		req: Request,
		res: Response
	): Promise<void> {
		try {
			const videoId = req.params.id;
			const videoRepository =
				getRepository(Video);
			const video = await videoRepository.findOne(
				{
					where: { id: videoId },
				}
			);
			if (!video) {
				res.status(404).send("Video not found");
				return;
			}
			res.json(video);
		} catch (error) {
			console.error(
				"Error getting video by id:",
				error
			);
			res
				.status(500)
				.send("Error getting video by id");
		}
	}

	async updateVideo(
		req: Request,
		res: Response
	): Promise<void> {
		try {
			const videoId = req.params.id;
			const { title, description, groupName } =
				req.body;
			const videoRepository =
				getRepository(Video);
			const video = await videoRepository.findOne(
				{
					where: { id: videoId },
				}
			);
			if (!video) {
				res.status(404).send("Video not found");
				return;
			}
			video.title = title || video.title;
			video.description =
				description || video.description;
			video.groupName =
				groupName || video.groupName;
			await videoRepository.save(video);
			res.json(video);
		} catch (error) {
			console.error(
				"Error updating video:",
				error
			);
			res
				.status(500)
				.send("Error updating video");
		}
	}

	async deleteVideo(
		req: Request,
		res: Response
	): Promise<void> {
		try {
			const videoId = req.params.id;
			const videoRepository =
				getRepository(Video);
			const video = await videoRepository.findOne(
				{
					where: { id: videoId },
				}
			);
			if (!video) {
				res.status(404).send("Video not found");
				return;
			}
			await videoRepository.remove(video);
			res.status(204).send();
		} catch (error) {
			console.error(
				"Error deleting video:",
				error
			);
			res
				.status(500)
				.send("Error deleting video");
		}
	}
}
