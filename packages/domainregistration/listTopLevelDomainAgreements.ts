import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets all legal agreements that user needs to accept before purchasing a domain.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-09-01, 2023-01-01, 2023-12-01, 2024-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native domainregistration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listTopLevelDomainAgreements(args: ListTopLevelDomainAgreementsArgs, opts?: pulumi.InvokeOptions): Promise<ListTopLevelDomainAgreementsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:domainregistration:listTopLevelDomainAgreements", {
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
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-09-01, 2023-01-01, 2023-12-01, 2024-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native domainregistration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listTopLevelDomainAgreementsOutput(args: ListTopLevelDomainAgreementsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListTopLevelDomainAgreementsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:domainregistration:listTopLevelDomainAgreements", {
        "forTransfer": args.forTransfer,
        "includePrivacy": args.includePrivacy,
        "name": args.name,
    }, opts);
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