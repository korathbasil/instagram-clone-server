import {Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';

import Post from './PostModel';
import User from './UserModel';

@Entity("comments")
class Comment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    body: string;

    @ManyToOne(() => Post, (post) => post.likes)
    @JoinColumn({ name: "post_id" })
    post: Post;

    @ManyToOne(() => User, user => user.comments)
    @JoinColumn({name: "user_id"})
    user: User;
}

export default Comment;