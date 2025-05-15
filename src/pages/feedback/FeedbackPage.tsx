
import React from 'react'

export default function FeedbackPage() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-semibold mb-6">Feedback</h1>
      <div className="max-w-2xl mx-auto">
        <form className="bg-white p-6 rounded-lg shadow space-y-4">
          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} type="button" className="text-2xl text-gray-300 hover:text-yellow-500">
                  ★
                </button>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
            <textarea id="comment" className="w-full p-2 border rounded-md h-32" placeholder="Share your experience"></textarea>
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 rounded-md">Submit Feedback</button>
        </form>
      </div>
    </div>
  )
}
