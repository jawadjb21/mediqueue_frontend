const avatars = ["https://github.com/shadcn.png", "https://github.com/evilrabbit.png", "https://images.unsplash.com/photo-1740252117012-bb53ad05e370?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1610483178766-8092d96033f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]


const getRandomInt = (max) => {
    return Math.ceil(Math.random() * max - 1);
}
export const chooseRandomUserPicture = () => {
    const index = getRandomInt(avatars.length);
    return avatars[index];
}