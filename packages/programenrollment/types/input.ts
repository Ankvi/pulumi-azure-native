import * as pulumi from "@pulumi/pulumi";
/**
 * A group of edu domains scoped to an Entra tenant.
 */
export interface DomainGroupArgs {
    /**
     * The edu domain names in this group.
     */
    domainNames: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Entra tenant ID that owns these domains. Defaults to the caller's tenant if omitted.
     */
    tenantId?: pulumi.Input<string | undefined>;
}

/**
 * Details of the Program EduEnrollment.
 */
export interface EduEnrollmentPropertiesArgs {
    /**
     * The domain groups associated with this enrollment.
     */
    domains: pulumi.Input<pulumi.Input<DomainGroupArgs>[]>;
}
