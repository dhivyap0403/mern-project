import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.bing.com/images/search?view=detailV2&ccid=w2McZSq%2b&id=E24FA114EA23AB8E6E8F1DF7BACB0FFB73FF135C&thid=OIP.w2McZSq-EYWxh02iSvC3xwHaHa&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c3631c652abe1185b1874da24af0b7c7%3frik%3dXBP%252fc%252fsPy7r3HQ%26riu%3dhttp%253a%252f%252fpluspng.com%252fimg-png%252fpng-user-icon-circled-user-icon-2240.png%26ehk%3dz4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%252biSysxPKZHGrCc%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=2240&expw=2240&q=user+image+png&simid=608038293193191740&FORM=IRPRST&ck=B3F996A9AC57200E1E7592DCDD555851&selectedIndex=0&itb=1",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
