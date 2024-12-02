import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Card, CardContent, Grid2, Tab, Typography } from "@mui/material";
import React from "react";
import PageTitle from "./PageTitle";
import { useQuery } from "../hooks/useQuery";
import DetailCardHeader from "./DetailCardHeader";
import EditForm from "./EditForm";

const ApplicationDetails = () => {
  let query = useQuery();
  const [value, setValue] = React.useState(query.get("tab") || "arrangement");
  const [isEditMode, setIsEditMode] = React.useState<{
    key: string;
    edit: boolean;
  }>();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <PageTitle title="Application Details" />

      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Arrangement" value="arrangement" />
          <Tab label="Asset" value="asset" />
        </TabList>
        <TabPanel className="px-0" value="arrangement">
          <Grid2 container spacing={1}>
            <Grid2 size={6}>
              <Card>
                <CardContent>
                  <DetailCardHeader
                    title="Arrangement Details"
                    showEdit={true}
                    onEdit={() =>
                      setIsEditMode({ key: "loanDetails", edit: true })
                    }
                  ></DetailCardHeader>
                  {isEditMode?.key === "loanDetails" && isEditMode.edit ? (
                    <EditForm
                      onSave={() =>
                        setIsEditMode({ key: "loanDetails", edit: false })
                      }
                      onCancel={() =>
                        setIsEditMode({ key: "loanDetails", edit: false })
                      }
                    />
                  ) : (
                    <>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Assessment type:
                        </Typography>
                        <span className="list-value">
                          Full Doc - Bank Statement
                        </span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Customer strategy:
                        </Typography>
                        <span className="list-value">Standard Customer</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Introducer program:
                        </Typography>
                        <span className="list-value">Standard</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Product:
                        </Typography>
                        <span className="list-value">Chattel Mortgage</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Asset class:
                        </Typography>
                        <span className="list-value">Primary</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Loan purpose:
                        </Typography>
                        <span className="list-value">New Lend</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Is private sale:
                        </Typography>
                        <span className="list-value">No</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Sale type:
                        </Typography>
                        <span className="list-value">Dealer Sale</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Date submitted:
                        </Typography>
                        <span className="list-value">
                          Friday, December 15 2023, 9:46 AM
                        </span>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 size={6}>
              <Card>
                <CardContent>
                  <DetailCardHeader
                    title="Repayments & Exposure"
                    onEdit={() =>
                      setIsEditMode({ key: "repayment", edit: true })
                    }
                  ></DetailCardHeader>
                  {isEditMode?.key === "repayment" && isEditMode.edit ? (
                    <EditForm
                      onSave={() =>
                        setIsEditMode({ key: "repayment", edit: false })
                      }
                      onCancel={() =>
                        setIsEditMode({ key: "repayment", edit: false })
                      }
                    />
                  ) : (
                    <>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Repayment amount:
                        </Typography>
                        <span className="list-value">$377.26</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Term:
                        </Typography>
                        <span className="list-value">5 Years</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Frequency:
                        </Typography>
                        <span className="list-value">Monthly</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Timing:
                        </Typography>
                        <span className="list-value">In Advance</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Establishment fee per draw-down:
                        </Typography>
                        <span className="list-value">$540.00</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Account keeping fee per repayment:
                        </Typography>
                        <span className="list-value">$4.95</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Year of manufacture:
                        </Typography>
                        <span className="list-value">2023</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Asset age at end of term:
                        </Typography>
                        <span className="list-value">5</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Total asset value:
                        </Typography>
                        <span className="list-value">$25,411.00</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Deposit amount:
                        </Typography>
                        <span className="list-value">$10,000.00</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Doc fee:
                        </Typography>
                        <span className="list-value">$0.00</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Total financed amount:
                        </Typography>
                        <span className="list-value">$15,411.00</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Current obligor exposure:
                        </Typography>
                        <span className="list-value">$10,000.00</span>
                      </div>
                      <div>
                        <Typography variant="caption" className="list-label">
                          Total obligor exposure:
                        </Typography>
                        <span className="list-value">$25,411.00</span>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </TabPanel>
        <TabPanel className="px-0" value="asset">
          <Grid2 container spacing={2}>
            <Grid2 size={6}>
              <Card>
                <CardContent>
                  <DetailCardHeader title="Asset Details"></DetailCardHeader>

                  <div>
                    <Typography variant="caption" className="list-label">
                      Type:
                    </Typography>
                    <span className="list-value">Motor vehicle up to 4.5t</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Year of manufacture:
                    </Typography>
                    <span className="list-value">2023</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Make:
                    </Typography>
                    <span className="list-value">Nissan</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Model:
                    </Typography>
                    <span className="list-value">Subaru</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Description:
                    </Typography>
                    <span className="list-value">
                      Lorem ipsum dolor sit amet
                    </span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Supplier name:
                    </Typography>
                    <span className="list-value">Edison Motors</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Supplier ABN:
                    </Typography>
                    <span className="list-value">9895684787</span>
                  </div>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 size={6}>
              <Card>
                <CardContent>
                  <DetailCardHeader
                    title="Valuations"
                    canEdit={false}
                  ></DetailCardHeader>

                  <img
                    className="w-100"
                    src={`${process.env.PUBLIC_URL}/assets/images/redbook-valuation-cert-sample.png`}
                    alt="red book valuation"
                  />
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </TabPanel>
      </TabContext>
    </>
  );
};

export default ApplicationDetails;
