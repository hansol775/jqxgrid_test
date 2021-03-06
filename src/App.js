import React, { Component } from 'react';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.ui-sunny.css';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid'


class App extends Component {
    constructor(props) {
        super(props);
        const data = '[{ "CompanyName": "Alfreds Futterkiste", "ContactName": "Maria Anders", "ContactTitle": "Sales Representative", "Address": "Obere Str. 57", "City": "Berlin", "Country": "Germany" }, { "CompanyName": "Ana Trujillo Emparedados y helados", "ContactName": "Ana Trujillo", "ContactTitle": "Owner", "Address": "Avda. de la Constitucin 2222", "City": "Mxico D.F.", "Country": "Mexico" }, { "CompanyName": "Antonio Moreno Taquera", "ContactName": "Antonio Moreno", "ContactTitle": "Owner", "Address": "Mataderos 2312", "City": "Mxico D.F.", "Country": "Mexico" }, { "CompanyName": "Around the Horn", "ContactName": "Thomas Hardy", "ContactTitle": "Sales Representative", "Address": "120 Hanover Sq.", "City": "London", "Country": "UK" }, { "CompanyName": "Berglunds snabbkp", "ContactName": "Christina Berglund", "ContactTitle": "Order Administrator", "Address": "Berguvsvgen 8", "City": "Lule", "Country": "Sweden" }, { "CompanyName": "Blauer See Delikatessen", "ContactName": "Hanna Moos", "ContactTitle": "Sales Representative", "Address": "Forsterstr. 57", "City": "Mannheim", "Country": "Germany" }, { "CompanyName": "Blondesddsl pre et fils", "ContactName": "Frdrique Citeaux", "ContactTitle": "Marketing Manager", "Address": "24, place Klber", "City": "Strasbourg", "Country": "France" }, { "CompanyName": "Blido Comidas preparadas", "ContactName": "Martn Sommer", "ContactTitle": "Owner", "Address": "C\/ Araquil, 67", "City": "Madrid", "Country": "Spain" }, { "CompanyName": "Bon app\'", "ContactName": "Laurence Lebihan", "ContactTitle": "Owner", "Address": "12, rue des Bouchers", "City": "Marseille", "Country": "France" }, { "CompanyName": "Bottom-Dollar Markets", "ContactName": "Elizabeth Lincoln", "ContactTitle": "Accounting Manager", "Address": "23 Tsawassen Blvd.", "City": "Tsawassen", "Country": "Canada" }, { "CompanyName": "B\'s Beverages", "ContactName": "Victoria Ashworth", "ContactTitle": "Sales Representative", "Address": "Fauntleroy Circus", "City": "London", "Country": "UK" }, { "CompanyName": "Cactus Comidas para llevar", "ContactName": "Patricio Simpson", "ContactTitle": "Sales Agent", "Address": "Cerrito 333", "City": "Buenos Aires", "Country": "Argentina" }, { "CompanyName": "Centro comercial Moctezuma", "ContactName": "Francisco Chang", "ContactTitle": "Marketing Manager", "Address": "Sierras de Granada 9993", "City": "Mxico D.F.", "Country": "Mexico" }, { "CompanyName": "Chop-suey Chinese", "ContactName": "Yang Wang", "ContactTitle": "Owner", "Address": "Hauptstr. 29", "City": "Bern", "Country": "Switzerland" }, { "CompanyName": "Comrcio Mineiro", "ContactName": "Pedro Afonso", "ContactTitle": "Sales Associate", "Address": "Av. dos Lusadas, 23", "City": "Sao Paulo", "Country": "Brazil" }, { "CompanyName": "Consolidated Holdings", "ContactName": "Elizabeth Brown", "ContactTitle": "Sales Representative", "Address": "Berkeley Gardens 12 Brewery", "City": "London", "Country": "UK" }, { "CompanyName": "Drachenblut Delikatessen", "ContactName": "Sven Ottlieb", "ContactTitle": "Order Administrator", "Address": "Walserweg 21", "City": "Aachen", "Country": "Germany" }, { "CompanyName": "Du monde entier", "ContactName": "Janine Labrune", "ContactTitle": "Owner", "Address": "67, rue des Cinquante Otages", "City": "Nantes", "Country": "France" }, { "CompanyName": "Eastern Connection", "ContactName": "Ann Devon", "ContactTitle": "Sales Agent", "Address": "35 King George", "City": "London", "Country": "UK" }, { "CompanyName": "Ernst Handel", "ContactName": "Roland Mendel", "ContactTitle": "Sales Manager", "Address": "Kirchgasse 6", "City": "Graz", "Country": "Austria"}]';
        
        const source = {
            datafields: [
                { name: 'CompanyName', type: 'string' },
                { name: 'ContactName', type: 'string' },
                { name: 'ContactTitle', type: 'string' },
                { name: 'Address', type: 'string' },
                { name: 'City', type: 'string' },
                { name: 'Country', type: 'string' }
            ],

            datatype: 'json',
            localdata : data,
            // url : './data.txt'
            
        };
        this.state = {
            data: [],
            columns: [
                { text: 'Company Name', datafield: 'CompanyName', width: 250 },
                { text: 'Contact Name', datafield: 'ContactName', width: 150 },
                { text: 'Contact Title', datafield: 'ContactTitle', width: 180 },
                { text: 'City', datafield: 'City', width: 120 },
                { text: 'Country', datafield: 'Country' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    render() {
        return (
            <div className="App">
                <h1>예제1 - 컬럼명으로 그룹헤더</h1>
                <JqxGrid
                    theme={'ui-sunny'}
                    ref='myGrid'
                    width={'100%'}
                    columnsresize={true} 
                    columnsreorder={true}
                    source={this.state.source} 
                    columns={this.state.columns}
                    sortable={true} 
                    altrows={true}
                    groupable={true}
                    localization={{
                        groupsheaderstring: '그룹정렬을 하시고자 하는 컬럼헤더를 여기에 Drag & Drop 하십시오.',
                        emptydatastring: ' '
                    }} // 
                    // onRowclick={this.selectRow}
                />
                <h1>예제2 - 그리드안에서 수정</h1>
                <JqxGrid
                    theme={'ui-sunny'}
                    ref='myGrid'
                    width={'100%'}
                    autoheight // height에 따라 화면이 길어짐. 스크롤로 만들고싶으면 뺌
                    autorowheight 
                    columnsresize={true} 
                    columnsreorder={true}
                    source={this.state.source} 
                    columns={this.state.columns}
                    sortable={true} 
                    altrows={true} 
                    editable={true} // 그리드에서 수정가능하게
                    selectionmode={'singlerow'} // 로우 1개만 선택되게
                    onCellbeginedit={this.myGridOnCellBeginEdit}
                    onCellendedit={this.myGridOnCellEndEdit}
                    // onRowclick={(data) => this.selectRow(data)} // 로우클릭 함수
                    // onCellvaluechanged={(data)=> this.changeCell(data)}    
                    handlekeyboardnavigation={this.handleKeyDown}
                    localization={{
                        emptydatastring: ' '
                    }}
                />
                <h1>예제3 - 체크박스 셀렉트 그리드</h1>
                <JqxGrid
                    theme={'ui-sunny'}
                    ref='myGrid'
                    width={'100%'}
                    // autoheight autorowheight 
                    columnsresize={true} columnsreorder={true}
                    source={this.state.source} columns={this.state.columns}
                    sortable={true} altrows={true}
                    selectionmode={'checkbox'} // 선택모드를 체크박스로
                    // selectionmode={'singlerow'}
                    // onRowclick={this.selectRow}
                    // onRowselect={this.checkRow}
                    // onRowunselect={this.uncheckRow}
                    localization={{
                        emptydatastring: ' '
                    }}
                />
            </div>
          )
    }
   
}

export default App;
