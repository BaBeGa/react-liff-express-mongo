var mongoose = require("mongoose");

var couponSchema = mongoose.Schema({
    details: {
        type: String
    },
    status: {
        type: String
    },
});

var userSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    name: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    dob: {
        type: Date
    },
    userLineID: {
        type: String
    },
    pictureUrl: {
        type: String
    },
    email: {
        type: String
    },
    statusMessage: {
        type: String
    },
    coupons: {
        type: [couponSchema]
    }
  },
  {
    collection: "user"
  },
  { timestamps: true }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
var User = mongoose.model("user", userSchema);
module.exports = User;