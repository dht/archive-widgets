import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Sixty, SixtyProps } from './Sixty';
import { BaseComponentDriver } from 'testing-base';

export class SixtyDriver extends BaseComponentDriver {
    private props: Partial<SixtyProps> = {};

    constructor() {
        super('Sixty');
    }

    when: any = {
        rendered: () => {
            render(<Sixty {...(this.props as SixtyProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Sixty {...(this.props as SixtyProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SixtyProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
