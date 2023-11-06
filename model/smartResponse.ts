/**
 * ManageSpace Search API
 * ManageSpace Search API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SmartResultType } from './smartResultType';
import { SmartResponseActionData } from './smartResponseActionData';
import { SmartResponseResult } from './smartResponseResult';
import { SmartAction } from './smartAction';


export interface SmartResponse { 
    resultType: SmartResultType;
    result: SmartResponseResult;
    action: SmartAction;
    actionData: SmartResponseActionData | null;
}
export namespace SmartResponse {
}


