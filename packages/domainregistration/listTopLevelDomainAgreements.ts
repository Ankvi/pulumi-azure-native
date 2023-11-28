import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets all legal agreements that user needs to accept before purchasing a domain.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2015-04-01, 2018-02-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2023-01-01.
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
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2015-04-01, 2018-02-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2023-01-01.
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
