import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties of an Assessment resource
 */
export interface AssessmentPropertiesArgs {
    /**
     * The name of the assessment template whose rules will be evaluated (e.g. 'Edu'). Immutable after creation.
     */
    assessmentType: pulumi.Input<string | enums.AssessmentType>;
    /**
     * Optional initial values applied to the rules created with this assessment. Write-only — these values are routed to the per-kind rules and are not returned on read.
     */
    initialValues?: pulumi.Input<pulumi.Input<EduInitialValueArgs>[] | undefined>;
}

/**
 * A domain entry within an education qualification rule. `domainNames` and `tenantId` are supplied on creation; `state` and `error` are returned by the service.
 */
export interface DomainEntryArgs {
    /**
     * Domain names associated with a tenant.
     */
    domainNames: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Microsoft Entra tenant ID owning these domains. Defaults to the calling user's tenant when omitted.
     */
    tenantId?: pulumi.Input<string | undefined>;
}

/**
 * Initial values for an education qualification rule. Per-domain entries (`domainNames` + `tenantId`) are used to populate the rule when the assessment is created.
 */
export interface EduInitialValueArgs {
    /**
     * Per-domain entries to use when populating the education qualification rule. Only `domainNames` and `tenantId` are read from this payload; `state` and `error` on each entry are populated by the service.
     */
    domains: pulumi.Input<pulumi.Input<DomainEntryArgs>[]>;
    /**
     * The kind of rule. Additional kinds may be added in future API versions.
     * Expected value is 'eduQualification'.
     */
    kind: pulumi.Input<"eduQualification">;
}
