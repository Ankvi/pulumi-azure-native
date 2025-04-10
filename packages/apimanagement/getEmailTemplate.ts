import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the email template specified by its identifier.
 *
 * Uses Azure REST API version 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function getEmailTemplate(args: GetEmailTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetEmailTemplateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getEmailTemplate", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "templateName": args.templateName,
    }, opts);
}

export interface GetEmailTemplateArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
    /**
     * Email Template Name Identifier.
     */
    templateName: string;
}

/**
 * Email Template details.
 */
export interface GetEmailTemplateResult {
    /**
     * Email Template Body. This should be a valid XDocument
     */
    readonly body: string;
    /**
     * Description of the Email Template.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Whether the template is the default template provided by API Management or has been edited.
     */
    readonly isDefault: boolean;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Email Template Parameter values.
     */
    readonly parameters?: types.outputs.EmailTemplateParametersContractPropertiesResponse[];
    /**
     * Subject of the Template.
     */
    readonly subject: string;
    /**
     * Title of the Template.
     */
    readonly title?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the details of the email template specified by its identifier.
 *
 * Uses Azure REST API version 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function getEmailTemplateOutput(args: GetEmailTemplateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEmailTemplateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getEmailTemplate", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "templateName": args.templateName,
    }, opts);
}

export interface GetEmailTemplateOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Email Template Name Identifier.
     */
    templateName: pulumi.Input<string>;
}