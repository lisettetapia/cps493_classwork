import { reactive } from "vue";
import { getUserByEmail } from "./users";

const session = reactive({
    user: null,
});

export function getSession() {
    return session;
}

export function login(email: string, password: string): User | null {
    const user = getUserByEmail(email);
    if (user && user.password === password) {
        session.user = user;
        return user;
    }
    return null;
}

export function logout() {
    session.user = null;
}

