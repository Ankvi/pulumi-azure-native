import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets all legal agreements that user needs to accept before purchasing a domain.
 */
export function listTopLevelDomainAgreements(args: ListTopLevelDomainAgreementsArgs, opts?: pulumi.InvokeOptions): Promise<ListTopLevelDomainAgreementsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:domainregistration/v20230101:listTopLevelDomainAgreements", {
        "forTransfer": args.forTransfer,
        "includePrivacy": args.includePrivacy,
        "name": args.name,
    }, opts);
}

export interface ListTopLevelDomainAgreementsArgs {
    /**
     * If <code>true</code>, then the list of agreements will include agreements for domain transfer as well; otherwise, <code>false</code>.
     */
    forTransfer?: boolean;
    /**
     * If <code>true</code>, then the list of agreements will include agreements for domain privacy as well; otherwise, <code>false</code>.
     */
    includePrivacy?: boolean;
    /**
     * Name of the top-level domain.
     */
    name: string;
}

/**
 * Collection of top-level domain legal agreements.
 */
export interface ListTopLevelDomainAgreementsResult {
    /**
     * Link to next page of resources.
     */
    readonly nextLink: string;
    /**
     * Collection of resources.
     */
    readonly value: types.outputs.TldLegalAgreementResponse[];
}
/**
 * Description for Gets all legal agreements that user needs to accept before purchasing a domain.
 */
export function listTopLevelDomainAgreementsOutput(args: ListTopLevelDomainAgreementsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListTopLevelDomainAgreementsResult> {
    return pulumi.output(args).apply((a: any) => listTopLevelDomainAgreements(a, opts))
}

export interface ListTopLevelDomainAgreementsOutputArgs {
    /**
     * If <code>true</code>, then the list of agreements will include agreements for domain transfer as well; otherwise, <code>false</code>.
     */
    forTransfer?: pulumi.Input<boolean>;
    /**
     * If <code>true</code>, then the list of agreements will include agreements for domain privacy as well; otherwise, <code>false</code>.
     */
    includePrivacy?: pulumi.Input<boolean>;
    /**
     * Name of the top-level domain.
     */
    name: pulumi.Input<string>;
}