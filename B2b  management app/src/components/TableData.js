import React, {Component} from 'react';
import axios from 'axios';
import { Grid, withStyles,CircularProgress,Paper,Checkbox} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {SERVER_URL,ROLL_NUMBER} from '../utils/constants';
import  '../utils/table.css'
import {pxToVh,pxToVw} from '../utils/theme.js'
import InfiniteScroll from "react-infinite-scroll-component";
class TableData extends Component {
  constructor(props){
    super(props)
    this.state= {
      posts: [],
      isLoading:true,
      tableRows: [],
      isNext: false,
      limit: 50
    };
  }
 loadMoreData = () =>{
   console.log("Adding limit")
   let update_limit = this.state.limit + 50
   this.setState({limit: update_limit})
   this.componentDidMount() 
  }
 componentDidMount=async() => {
    console.log("First Render")
    await axios.get(`${SERVER_URL}${ROLL_NUMBER}/display?limit=${this.state.limit}`)
      .then(response => response.data)
      .then(data => {
          console.log(data);
          this.setState({isNext: true});
          //if (err) throw err;
         this.setState({ posts: data })
      })
      .then(async() => {
         this.setState({ tableRows:this.assemblePosts(), isLoading:false })
         console.log(this.state.tableRows);
      });
  }
  assemblePosts= () => {
    let posts =this.state.posts.map((post) => {
      return (
        {
          id: post.doc_id,
          cust_number: post.cust_number,
          name_customer: post.name_customer,
          invoice_id: post.invoice_id,
          due_in_date: post.due_in_date,
          total_open_amount: post.total_open_amount,
          predicted_payment_date: '-',
          predicted_aging_bucket: '-',
          notes:post.notes
        }
      )
    });
    return posts;
  }

  render() {
    const rows=this.state.tableRows
    return (
      <Grid
      container
       style={{ 
         height: pxToVh(400), 
         width: '100%',
         marginLeft: '30px',
         marginRight: '30px'
         
        }}
       >
          
         {/* <DataGrid
          columns={columns}
          rows={rows} 
          checkboxSelection
          disableColumnMenu
          disableSelectionOnClick
          density="compact"         
          rowsPerPageOptions={[100,{value:50000,label:'ALL'}]}
        /> */}
        <TableContainer id="scrollableDiv" className='tableContainer'> 
        <InfiniteScroll
          dataLength={this.state.tableRows.length}
          next={this.loadMoreData}
          scrollableTarget="scrollableDiv"
          hasMore={this.state.isNext}
          loader={
            <div
              style={{ height: "70%", paddingLeft: "50%", overflow: "hidden" }}
            >
            <CircularProgress />
            </div>
          }
        >
      <Table>
        <TableHead>
          <TableRow>
          <TableCell>
               <Checkbox
                      id="checkBox"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    ></Checkbox>
            </TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Customer #</TableCell>
            <TableCell>Bill #</TableCell>
            <TableCell>Bill Amount</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Predicted Payment Date</TableCell>
            <TableCell>Predicted Aging Bucket</TableCell>
            <TableCell>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
               <Checkbox
                      id="checkBox"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    ></Checkbox>
                    </TableCell>
              <TableCell>{row.name_customer}</TableCell>
              <TableCell>{row.cust_number}</TableCell>
              <TableCell>{row.invoice_id}</TableCell>
              <TableCell>{row.total_open_amount}</TableCell>
              <TableCell>{row.due_in_date}</TableCell>
              <TableCell>{row.predicted_payment_date}</TableCell>
              <TableCell>{row.predicted_aging_bucket}</TableCell>
              <TableCell>{row.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </InfiniteScroll> 
    </TableContainer>
    
      </Grid>
    )
  }
}
export default TableData;