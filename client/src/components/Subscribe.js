import React, { Component } from "react";
import CommentDataService from "../services/subscribe";

export default class SubscribeForm extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeVote = this.onChangeVote.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.saveComment = this.saveComment.bind(this);
        this.newComment = this.newComment.bind(this);

        this.state = {
            id: null,
            name: "",
            email: "",
            vote: "",
            comment: "",

            submitted: false
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeVote(e) {
        this.setState({
            vote: e.target.value
        });
    }

    onChangeComment(e) {
        this.setState({
            comment: e.target.value
        });
    }

    saveComment() {
        const data = {
            name: this.state.name,
            email: this.state.email,
            vote: this.state.vote,
            comment: this.state.comment
        };

        CommentDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    email: response.data.email,
                    vote: response.data.vote,
                    comment: response.data.comment,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newComment() {
        this.setState({
            id: null,
            name: "",
            email: "",
            vote: "",
            comment: "",

            submitted: false
        });
    }

    render() {
        return (

            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You subscribed successfully!</h4>
                    </div>
                ) : (
                    
                <div className="h-screen p-5 dark:bg-gray-800">
                    <h1 className="text-indigo-900 dark:text-white text-4xl text-center mb-4">Subscribe and Vote!</h1>
                    <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input 
                            id="name"
                            required
                            value={this.state.name}
                            onChange={this.onChangeName}
                            name="name"
                            type="text" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
                        </div>

                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                        <input 
                        required
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        name="email"
                        type="email" 
                        id="email" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="planets" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Vote for your favorite planet!</label>
                        <select
                            required
                            value={this.state.vote}
                            onChange={this.onChangeVote}
                            name="vote"
                            id="planets"
                            className="bg-indigo-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500
                            focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        <option value="Mercury">Mercury</option>
                        <option value="Venus">Venus</option>
                        <option value="Earth">Earth</option>
                        <option value="Mars">Mars</option>
                        <option value="Jupiter">Jupiter</option>
                        <option value="Saturn">Saturn</option>
                        <option value="Uranus">Uranus</option>
                        <option value="Neptune">Neptune</option>

                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea 
                        id="comment"
                        required
                        value={this.state.comment}
                        onChange={this.onChangeComment}
                        name="comment"
                        rows="4" 
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                    </div>
                    <button type="submit" onClick={this.saveComment} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
                    </form>

                </div>
                )}
            </div>
        );
    }
}