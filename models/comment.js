const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    
    content: {
      type: String,
      required: true,
    },
    blogId: {
      type: Schema.Types.ObjectId,
      ref: "blog", // Make sure the 'blog' model name matches exactly
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true } // ✅ Correctly placed here
);

const Comment = model("comment", commentSchema);

module.exports = Comment;
