import File from '../models/File';

class FileController {
  async create(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    return res.status(201).json(file);
  }
}

export default new FileController();
