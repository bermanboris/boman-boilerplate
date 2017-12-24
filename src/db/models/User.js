import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const User = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }
});

User.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    this.password = await bcrypt.hash(this.password, 12);
    return next();
  } catch (err) {
    return next(err);
  }
});

User.methods.comparePassword = async function comparePassword(
  candidatePassword
) {
  try {
    const match = await bcrypt.compare(
      candidatePassword,
      this.password
    );
    if (match) return true;
    return false;
  } catch (err) {
    return false;
  }
};
export default mongoose.model('User', User);
