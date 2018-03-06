import React, { Component } from 'react';
import { ListView } from 'react-native';
import ListItem from './ListItem';
//redux部分との連携
import { connect } from 'react-redux';


class LibraryList extends Component{
    componentWillMount(){
        //listviewで使うリストのデータソース(~cloneWithRowsまでは基本リストビューを使うなら同じ流れ)
        const ds = new ListView.DataSource({
            rowHasChanged:(r1,r2)=> r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }
    //リストの中の一つ一つの要素をreturnする。そのためにlibraryをpropsとして渡す
    renderRow(library){
        return <ListView librarydayo={library} />;
    }

    render(){
        return(
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

// mapStateToProps reduxのstoreにあるstateをpropsとして扱う
const mapStateToProps = state => {
    //state.librariesはreducers/index.jsのlibraries
    return { libraries: state.libraries }
}
//connectヘルパーでmapStateToPropsの内容をLibraryListで使えるようにする
export default connect(mapStateToProps)(LibraryList);
