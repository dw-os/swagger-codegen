/**
 * Swagger Petstore *_/ ' \" =end -- \\r\\n \\n \\r
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\  *_/ ' \" =end --       
 *
 * OpenAPI spec version: 1.0.0 *_/ ' \" =end -- \\r\\n \\n \\r
 * Contact: apiteam@swagger.io *_/ ' \" =end -- \\r\\n \\n \\r
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';


import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class FakeService {
    protected basePath = 'https://petstore.swagger.io *_/ ' \" =end -- \\r\\n \\n \\r/v2 *_/ ' \" =end -- \\r\\n \\n \\r';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
			this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * 
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                (objA as any)[key] = (objB as any)[key];
            }
        }
        return <T1&T2>objA;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    /**
     * To test code injection *_/ &#39; \&quot; &#x3D;end -- \\r\\n \\n \\r
     * 
     * @param test code inject * &#39; &quot; &#x3D;end  rn n r To test code injection *_/ &#39; \&quot; &#x3D;end -- \\r\\n \\n \\r
     */
    public testCodeInjectEndRnNR(test code inject * &#39; &quot; &#x3D;end  rn n r?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.testCodeInjectEndRnNRWithHttpInfo(test code inject * &#39; &quot; &#x3D;end  rn n r, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * To test code injection *_/ &#39; \&quot; &#x3D;end -- \\r\\n \\n \\r
     * 
     * @param test code inject * &#39; &quot; &#x3D;end  rn n r To test code injection *_/ &#39; \&quot; &#x3D;end -- \\r\\n \\n \\r
     */
    public testCodeInjectEndRnNRWithHttpInfo(test code inject * &#39; &quot; &#x3D;end  rn n r?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/fake';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json', 
            '*_/   =end --       '
        ];
        let canConsumeForm = this.canConsumeForm(consumes);
        let useForm = false;
        let formParams = new (useForm ? FormData : URLSearchParams as any)() as {
          set(param: string, value: any): void;
        };

        // to determine the Accept header
        let produces: string[] = [
            'application/json', 
            '*_/   =end --       '
        ];

            
        if (test code inject * &#39; &quot; &#x3D;end  rn n r !== undefined) {
            formParams.set('test code inject */ &#39; &quot; &#x3D;end -- \r\n \n \r', <any>test code inject * &#39; &quot; &#x3D;end  rn n r);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: formParams.toString(),
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
