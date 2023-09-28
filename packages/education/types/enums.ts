export const StudentRole = {
    Student: "Student",
    Admin: "Admin",
} as const;

/**
 * Student Role
 */
export type StudentRole = (typeof StudentRole)[keyof typeof StudentRole];
