export const StudentRole = {
    Student: "Student",
    Admin: "Admin",
} as const;

export type StudentRole = (typeof StudentRole)[keyof typeof StudentRole];
