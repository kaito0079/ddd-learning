import { User } from '../entities/user.entity';

export interface UserRepositoryInterface {
  findById(id: string): Promise<User | null>;
  create(user: User): Promise<void>;
  update(user: User): Promise<void>;
  delete(id: string): Promise<void>;
  findAll(): Promise<User[]>;
}
