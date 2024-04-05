import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This returns the list of interfaces in the WSDL
 */
export function listCustomApiWsdlInterfaces(args: ListCustomApiWsdlInterfacesArgs, opts?: pulumi.InvokeOptions): Promise<ListCustomApiWsdlInterfacesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20160601:listCustomApiWsdlInterfaces", {
        "content": args.content,
        "importMethod": args.importMethod,
        "location": args.location,
        "service": args.service,
        "subscriptionId": args.subscriptionId,
        "url": args.url,
    }, opts);
}

export interface ListCustomApiWsdlInterfacesArgs {
    /**
     * The WSDL content
     */
    content?: string;
    /**
     * The WSDL import method
     */
    importMethod?: string | types.enums.WsdlImportMethod;
    /**
     * The location
     */
    location: string;
    /**
     * The service with name and endpoint names
     */
    service?: types.inputs.WsdlService;
    /**
     * Subscription Id
     */
    subscriptionId?: string;
    /**
     * The WSDL URL
     */
    url?: string;
}

/**
 * A list of custom API WSDL interfaces
 */
export interface ListCustomApiWsdlInterfacesResult {
    /**
     * Collection of WSDL interfaces
     */
    readonly value?: types.outputs.WsdlServiceResponse[];
}
/**
 * This returns the list of interfaces in the WSDL
 */
export function listCustomApiWsdlInterfacesOutput(args: ListCustomApiWsdlInterfacesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListCustomApiWsdlInterfacesResult> {
    return pulumi.output(args).apply((a: any) => listCustomApiWsdlInterfaces(a, opts))
}

export interface ListCustomApiWsdlInterfacesOutputArgs {
    /**
     * The WSDL content
     */
    content?: pulumi.Input<string>;
    /**
     * The WSDL import method
     */
    importMethod?: pulumi.Input<string | types.enums.WsdlImportMethod>;
    /**
     * The location
     */
    location: pulumi.Input<string>;
    /**
     * The service with name and endpoint names
     */
    service?: pulumi.Input<types.inputs.WsdlServiceArgs>;
    /**
     * Subscription Id
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * The WSDL URL
     */
    url?: pulumi.Input<string>;
}