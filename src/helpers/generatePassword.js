export const generatePassword = (length = 10) => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const special = "@$!%*?&";

    const all = upper + lower + numbers + special;

    let passwordText = "";

    // Ensure at least one from each category
    passwordText += upper[Math.floor(Math.random() * upper.length)];
    passwordText += lower[Math.floor(Math.random() * lower.length)];
    passwordText += numbers[Math.floor(Math.random() * numbers.length)];
    passwordText += special[Math.floor(Math.random() * special.length)];

    // Fill remaining characters
    for (let i = 4; i < length; i++) {
        passwordText += all[Math.floor(Math.random() * all.length)];
    }

    // Shuffle password (important)
    return passwordText
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
};