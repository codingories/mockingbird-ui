import React from 'react'
import './style.scss';

export function PropsTable (props: any) {
    const { propDefinitions } = props;
    const propsFields = propDefinitions.map(
        ({ property, propType, required, description, defaultValue }: any) => {
            return (
                <tr key={property}>
                    <td>
                        {property}
                        {/*{required ? <span style={{ color: 'red', marginLeft: '5px' }}>*</span> : null}*/}
                    </td>
                  <td>{required}</td>
                  <td>{description}</td>
                  <td>{propType}</td>
                  <td>{defaultValue}</td>
                </tr>
            );
        }
    );

    return (
        <table {...{ width: '100%' }}>
            <thead>
                <tr>
                    <th>属性名</th>
                    <th>参数类型</th>
                    <th>是否必填</th>
                    <th>默认值</th>
                    <th>描述</th>
                </tr>
            </thead>
            <tbody>{propsFields}</tbody>
        </table>
    );
}
