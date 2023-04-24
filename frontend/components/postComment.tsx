import { useSession } from 'next-auth/react';
import React, { ChangeEvent, useState, useRef } from 'react';

interface PostCommentProps {
  _id: string;
}

const PostComment: React.FC<PostCommentProps> = ({_id }) => {
  const [userText, setUserText] = useState("")
  const session = useSession()
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setUserText(event.target.value)
  }

  const handleClick = () => {
    if (textareaRef.current) {
      textareaRef.current.rows = 4;
      textareaRef.current.classList.add('border-blue-500');
      textareaRef.current.classList.remove('border-black');
    }
  };


  const handleSubmit = async () => {
    try {
      const url = `/api/post/comments/comment/`;
      const options: RequestInit = {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify({ "_id": _id,comment: { text: userText, user: { name:session.data?.user?.name, email: session.data?.user?.email} } }),
      };
      
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(`Failed to post comment: ${response.statusText}`);
      }
      
      setUserText("");
    } catch (error) {
      console.error(`Failed to post comment`);
    }
  };
  
  return (
    <div className="mt-4 relative">
      <textarea
        className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline whitespace-pre-wrap break-words resize-none ${
          isFocused ? 'border-blue-600 focus:border-blue-500 focus:ring-1' : 'border-black'"
        placeholder="Skriv melding ..."
        required maxLength={500}
        value={userText}
        rows = {1}
        ref={textareaRef}
        onChange={handleInputChange}
        onClick={handleClick}
        
        
      ></textarea>

      <div className="flex justify-end items-center mt-2">
        <div className="text-center mr-3 text-xs text-gray-600">
          {userText.length}/500
        </div>
        
        <button
          className="bg-green-500 hover:bg-primary-200 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default PostComment;
