import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';
import md5 from 'md5'

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async getUsers(): Promise<User[]> {
        const users = await this.userModel.find().exec();
        return users;
    }

    async getUser(userID): Promise<User> {
        const user = await this.userModel
            .findById(userID)
            .exec();
        return user;
    }

    async addUser(Body: CreateUserDTO): Promise<User> {
        const user = {
            name: Body.name,
            mail: Body.mail,
            balance: 0,
            role: 'user'
        }
        const newUser = await new this.userModel(user);
        return newUser.save();
    }

    async editUser(userID, createUserDTO: CreateUserDTO): Promise<User> {
        const editedUser = await this.userModel
            .findByIdAndUpdate(userID, createUserDTO, { new: true });
        return editedUser;
    }

    async deleteUser(userID): Promise<any> {
        const deletedUser = await this.userModel
            .findByIdAndRemove(userID);
        return deletedUser;
    }

}