import exp from "constants";
import crypto from "crypto";
export const hashPassword = async (password: string) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const buf = (await crypto.scryptSync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
};
export const comparePassword = async (
  storedPassword: string,
  suppliedPassword: string
): Promise<boolean> => {
  // split() returns array
  const [hashedPassword, salt] = storedPassword.split(".");
  // we need to pass buffer values to timingSafeEqual
  const hashedPasswordBuf = Buffer.from(hashedPassword, "hex");
  // we hash the new sign-in password
  const suppliedPasswordBuf = (await crypto.scryptSync(
    suppliedPassword,
    salt,
    64
  )) as Buffer;
  return crypto.timingSafeEqual(hashedPasswordBuf, suppliedPasswordBuf);
};
// export const encrypt = (text: string, secretKey: string): string => {
//   const algorithm = "aes-256-cbc";
//   const key = crypto.randomBytes(32);
//   const iv = crypto.randomBytes(16);
//   const cipher = crypto.createCipheriv(algorithm, key, iv);

//   let encrypted = cipher.update("Hello World", "utf8", "hex");
//   encrypted += cipher.final("hex");

//   return encrypted;
// };

// export const decrypted = (encrypted:string):string => {
//   const algorithm = "aes-256-cbc";
//     const key = crypto.randomBytes(32);
//     const iv = crypto.randomBytes(16);
//     const decipher = crypto.createDecipheriv(algorithm, key, iv);
//     let decrypted = decipher.update(encrypted, "hex", "utf8");
//     decrypted += decipher.final("utf8");
//     return encrypted;
// };
