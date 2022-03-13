import React, { Component } from 'react'


class TOdoTable extends Component {
    state = {}
    render() {
        return (
            <table class="table table-hover mytable">
            <thead>
              <tr>
                <th scope="col">訂單編號</th>
                <th scope="col">商品名稱</th>
                <th scope="col">問題種類</th>
                <th scope="col">處理狀態</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        );
    }
}

export default TOdoTable;