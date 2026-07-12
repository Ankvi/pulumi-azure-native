export const StudentRole = {
    /**
     * Student
     */
    Student: "Student",
    /**
     * Admin
     */
    Admin: "Admin",
} as const;

/**
 * Student Role
 */
export type StudentRole = (typeof StudentRole)[keyof typeof StudentRole];
