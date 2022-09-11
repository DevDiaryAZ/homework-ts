import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div>
            <div className="container">
                {/*<hr/>*/}
                <div className="title">homeworks 7</div>
                <div className="title title_purple">Universal select and checkbox</div>
                {/*<hr/>*/}

                {/*should work (должно работать)*/}
                <div>
                    <SuperSelect
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
                <div>
                    <SuperRadio
                        name={'radio'}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>

                {/*<hr/>*/}
                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeSuperSelect/>*/}
                {/*<AlternativeSuperRadio/>*/}
                {/*<hr/>*/}
            </div>
        </div>
    )
}

export default HW7
