import React, {Component} from 'react';

class TOC extends Component {
    render() {
        var lists = [];
        var datas = this.props.data;
        var i = 0;
        while (i < datas.length) {
            lists.push(
                <li key={datas[i].id}>
                    <a href={"/content/" + datas[i].id}>{datas[i].title}</a>
                </li>
            )
            i += 1;
        }

        return (<nav>
                    <ul>
                        {lists}
                    </ul>
                </nav>);
    }
}
export default TOC;