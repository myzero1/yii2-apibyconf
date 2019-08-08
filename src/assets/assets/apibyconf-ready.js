window.getCurentTime = function getCurentTime() { 
    var now = new Date();
    
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日
    
    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    var ss = now.getSeconds();           //秒
    
    var clock = year + "-";
    
    if(month < 10)
        clock += "0";
    
    clock += month + "-";
    
    if(day < 10)
        clock += "0";
        
    clock += day + " ";
    
    if(hh < 10)
        clock += "0";
        
    clock += hh + ":";
    if (mm < 10) clock += '0'; 
    clock += mm + ":"; 
     
    if (ss < 10) clock += '0'; 
    clock += ss; 
    return(clock); 
}

window.curentTime = window.getCurentTime();

window.jsoneditorOldJson = {
    "swagger": "2.0",
    "info": {
        "description": "This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.",
        "version": "v1",
        "title": "Swagger Petstore",
        "termsOfService": "http://swagger.io/terms/",
        "contact": {
            "email": "apiteam@swagger.io"
        },
        "license": {
            "name": "Apache 2.0",
            "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
        }
    },
    "host": "apibyconf.test",
    "restModuleName": "v1",
    "restModuleAlias": "v1",
    "restModuleAliasPath": "@backend/modules/v1",
    "restModuleNamespace": "backend\\modules\\v1",
    "externalDocs": {
        "description": "11Find out more about Swagger",
        "url": "http://swagger.io"
    },
    "schemes": "http",
    "mySecurity": {
        "security": "httpBearerAuth",
        "exclude": ["post /authenticator/login", "post /authenticator/join"]
    },
    "myGroup": {
        "currentUser": "admin",
        "member": {
            "userA": "controllerA1,controllerA2",
        }
    },
    "controllers": {
        "authenticator": {
            "description": "Insert a controller node",
            "actions": {
                "join": {
                    "summary": "get the api token",
                    "description": "The action's description",
                    "method": "post",
                    "uri": "/{controller}/join",
                    "logs": {
                        [window.curentTime]: "add action"
                    },
                    "inputs": {
                        "body_params": {
                            "username": {
                                "des": "User name",
                                "required": true,
                                "eg": "myzero1",
                                "rules": "^.\\w{1,32}$",
                                "error_msg": "invalid username"
                            },
                            "password": {
                                "des": "password",
                                "required": true,
                                "eg": "myzero1",
                                "rules": "^.{1,32}$",
                                "error_msg": "invalid password"
                            }
                        },
                        "path_params": {},
                        "query_params": {}
                    },
                    "outputs": {
                        '735200': {
                            "code": 735200,
                            "msg": "ok",
                            "data": {
                                "dataTitle": "dataValue"
                            }
                        },
                        '735403': {
                            "code": 735403,
                            "msg": "Forbidden",
                            "data": {
                                "dataTitle": "dataValue"
                            }
                        },
                        '735404': {
                            "code": 735404,
                            "msg": "Not Found",
                            "data": {
                                "dataTitle": "dataValue"
                            }
                        },
                        '735441': {
                            "code": 735441,
                            "msg": "Input validation failed",
                            "data": {
                                "dataTitle": "dataValue"
                            }
                        },
                        '735451': {
                            "code": 735451,
                            "msg": "Database validation failed",
                            "data": {
                                "dataTitle": "dataValue"
                            }
                        },
                        '735452': {
                            "code": 735452,
                            "msg": "Input logic validation failed",
                            "data": {
                                "dataTitle": "dataValue"
                            }
                        },
                        '735500': {
                            "code": 735500,
                            "msg": "Internal Server Error",
                            "data": {
                                "dataTitle": "dataValue"
                            }
                        },
                        '735735': {
                            "code": 735735,
                            "msg": "Unknown",
                            "data": {
                                "dataTitle": "dataValue"
                            }
                        }
                    }
                },
                "login": {
                    "summary": "get the api token",
                    "description": "The action's description",
                    "method": "post",
                    "uri": "/{controller}/login",
                    "logs": {
                        [window.curentTime]: "add action"
                    },
                    "inputs": {
                        "body_params": {
                            "username": {
                                "des": "User name",
                                "required": true,
                                "eg": "myzero1",
                                "rules": "^.\\w{1,32}$",
                                "error_msg": "invalid username"
                            },
                            "password": {
                                "des": "password",
                                "required": true,
                                "eg": "myzero1",
                                "rules": "^.{1,32}$",
                                "error_msg": "invalid password"
                            }
                        },
                        "path_params": {},
                        "query_params": {}
                    },
                    "outputs": {
                        '735200': {
                            "code": 735200,
                            "msg": "ok",
                            "data": {
                                "username": "myzero1",
                                "api_token": "123456dsfe5w"
                            }
                        }
                    }
                }
            }
        },
        "user": {
            "description": "Insert a controller node",
            "actions": {
                "create": {
                    "summary": "The create action's summary",
                    "description": "The action's description",
                    "method": "post",
                    "uri": "/{controller}",
                    "logs": {
                        [window.curentTime]: "add action"
                    },
                    "inputs": {
                        "body_params": {
                            "username": {
                                "des": "username",
                                "required": true,
                                "eg": "myzero1",
                                "rules": "^\\w{1,32}$",
                                "error_msg": "Input parameter error"
                            },
                            "password": {
                                "des": "password",
                                "required": true,
                                "eg": "myzero1",
                                "rules": "^.{1,32}$",
                                "error_msg": "Input parameter error"
                            },
                            "status": {
                                "des": "status",
                                "required": true,
                                "eg": 1,
                                "rules": "^\\d{1,1}$",
                                "error_msg": "Input parameter error"
                            }
                        },
                        "path_params": {},
                        "query_params": {}
                    },
                    "outputs": {
                        '735200': {
                            "code": 735200,
                            "msg": "ok",
                            "data": {
                                "username": "myzero1",
                                "status": 1,
                                "created_at": "2019-04-28 11:11:11",
                                "updated_at": "2019-04-28 11:11:11"
                            }
                        }
                    }
                },
                "update": {
                    "summary": "The create action's summary",
                    "description": "The action's description",
                    "method": "put",
                    "uri": "/{controller}/{id}",
                    "logs": {
                        [window.curentTime]: "add action"
                    },
                    "inputs": {
                        "body_params": {
                            "username": {
                                "des": "username",
                                "required": true,
                                "eg": "myzero1",
                                "rules": "^\\w{1,32}$",
                                "error_msg": "Input parameter error"
                            },
                            "password": {
                                "des": "password",
                                "required": true,
                                "eg": "myzero1",
                                "rules": "^.{1,32}$",
                                "error_msg": "Input parameter error"
                            },
                            "status": {
                                "des": "status",
                                "required": true,
                                "eg": 1,
                                "rules": "^\\d{1,1}$",
                                "error_msg": "Input parameter error"
                            }
                        },
                        "path_params": {
                            "id": {
                                "des": "id",
                                "required": true,
                                "eg": 1,
                                "rules": "^\\d+$",
                                "error_msg": "Input parameter error"
                            }
                        },
                        "query_params": {}
                    },
                    "outputs": {
                        '735200': {
                            "code": 735200,
                            "msg": "ok",
                            "data": {
                                "username": "myzero1",
                                "status": 1,
                                "created_at": "2019-04-28 11:11:11",
                                "updated_at": "2019-04-28 11:11:11"
                            }
                        }
                    }
                },
                "view": {
                    "summary": "The view action's summary",
                    "description": "The action's description",
                    "method": "get",
                    "uri": "/{controller}/{id}",
                    "logs": {
                        [window.curentTime]: "add action"
                    },
                    "inputs": {
                        "body_params": {},
                        "path_params": {
                            "id": {
                                "des": "Id",
                                "required": true,
                                "eg": 1,
                                "rules": "^\\d+$",
                                "error_msg": "Input parameter error"
                            }
                        },
                        "query_params": {}
                    },
                    "outputs": {
                        '735200': {
                            "code": 735200,
                            "msg": "ok",
                            "data": {
                                "username": "myzero1",
                                "status": 1,
                                "api_token": "eHiFYAsL5DMkAiwK-iUJZEon-u42qhpH_1557385911",
                                "created_at": "2019-04-28 11:11:11",
                                "updated_at": "2019-04-28 11:11:11"
                            }
                        }
                    }
                },
                "delete": {
                    "summary": "The delete action's summary",
                    "description": "The action's description",
                    "method": "delete",
                    "uri": "/{controller}/{id}",
                    "logs": {
                        [window.curentTime]: "add action"
                    },
                    "inputs": {
                        "body_params": {},
                        "path_params": {
                            "id": {
                                "des": "Id",
                                "required": true,
                                "eg": 1,
                                "rules": "^\\d+$",
                                "error_msg": "Input parameter error"
                            }
                        },
                        "query_params": {}
                    },
                    "outputs": {
                        '735200': {
                            "code": 735200,
                            "msg": "ok",
                            "data": {
                                "id": 1
                            }
                        }
                    }
                },
                "index": {
                    "summary": "The index action's summary",
                    "description": "The action's description",
                    "method": "get",
                    "uri": "/{controller}",
                    "logs": {
                        [window.curentTime]: "add action"
                    },
                    "inputs": {
                        "body_params": {},
                        "path_params": {},
                        "query_params": {
                            "username": {
                                "des": "username",
                                "required": false,
                                "eg": "n1",
                                "rules": "^.{0,32}$",
                                "error_msg": "Input parameter error"
                            }
                        }
                    },
                    "outputs": {
                        '735200': {
                            "code": 735200,
                            "msg": "ok",
                            "data": {
                                "total": 9,
                                "page": 1,
                                "page_size": 20,
                                "items": [{
                                    "id": 1,
                                    "username": "myzero1",
                                    "status": 1,
                                    "created_at": "2019-04-28 11:11:11",
                                    "updated_at": "2019-04-28 11:11:11"
                                }]
                            }
                        }
                    }
                },
                "export": {
                    "summary": "The export action's summary",
                    "description": "It require \"yii2tech/spreadsheet\" Yii2 extension",
                    "method": "get",
                    "uri": "/{controller}/export",
                    "logs": {
                        [window.curentTime]: "add action"
                    },
                    "inputs": {
                        "body_params": {},
                        "path_params": {},
                        "query_params": {
                            "username": {
                                "des": "username",
                                "required": false,
                                "eg": "myzero1",
                                "rules": "^.{0,32}$",
                                "error_msg": "Input parameter error"
                            }
                        }
                    },
                    "outputs": {
                        '735200': {
                            "code": 735200,
                            "msg": "ok",
                            "data": {
                                "url": "/export.xsl"
                            }
                        }
                    }
                },
                "status": {
                    "summary": "The custom action's summary",
                    "description": "The action's description",
                    "method": "patch",
                    "uri": "/{controller}/{id}/status",
                    "logs": {
                        [window.curentTime]: "add action"
                    },
                    "inputs": {
                        "body_params": {
                            "status": {
                                "des": "status",
                                "required": false,
                                "eg": 2,
                                "rules": "^.{0,32}$",
                                "error_msg": "Input parameter error"
                            }
                        },
                        "path_params": {
                            "id": {
                                "des": "Id",
                                "required": true,
                                "eg": 1,
                                "rules": "^\\d+$",
                                "error_msg": "Input parameter error"
                            }
                        },
                        "query_params": {}
                    },
                    "outputs": {
                        '735200': {
                            "code": 735200,
                            "msg": "ok",
                            "data": {
                                "id": 1,
                                "username": "myzero1",
                                "status": 2,
                                "created_at": "2019-04-28 11:11:11",
                                "updated_at": "2019-04-28 11:11:11"
                            }
                        }
                    }
                }
            }
        }
    }
};

var templates = [
      {
          text: 'controller',
          title: 'Insert a controller Node',
          className: 'jsoneditor-append jsoneditor-default',
          field: '',
          value: {
              "description": "Insert a controller node",
              "actions": {
                  "create": {
                      "summary": "The create action's summary",
                      "description": "The action's description",
                      "method": "post",
                      "uri": "/{controller}",
                      "logs": {
                            [window.getCurentTime()]: "add action"
                      },
                      "inputs": {
                          "body_params": {
                              "name": {
                                  "des": "Name",
                                  "required": true,
                                  "eg": "name",
                                  "rules": "^.{0,32}$",
                                  "error_msg": "Input parameter error"
                              },
                              "des": {
                                  "des": "Description",
                                  "required": false,
                                  "eg": "description",
                                  "rules": "^.{0,32}$",
                                  "error_msg": "Input parameter error"
                              }
                          },
                          "path_params": {},
                          "query_params": {}
                      },
                      "outputs": {
                          "code": 200,
                          "msg": "msg",
                          "data": {
                              "id": 1,
                              "name": "name",
                              "des": "description",
                              "created_at": "2019-04-28 11:11:11",
                              "updated_at": "2019-04-28 11:11:11"
                          }
                      }
                  },
                  "update": {
                      "summary": "The update action's summary",
                      "description": "The action's description",
                      "method": "put",
                      "uri": "/{controller}/{id}",
                      "logs": {
                            [window.getCurentTime()]: "add action"
                      },
                      "inputs": {
                          "body_params": {
                              "name": {
                                  "des": "Name",
                                  "required": false,
                                  "eg": "name",
                                  "rules": "^.{0,32}$",
                                  "error_msg": "Input parameter error"
                              },
                              "des": {
                                  "des": "Description",
                                  "required": false,
                                  "eg": "description",
                                  "rules": "^.{0,32}$",
                                  "error_msg": "Input parameter error"
                              }
                          },
                          "path_params": {
                              "id": {
                                  "des": "Id",
                                  "required": true,
                                  "eg": "name",
                                  "rules": "^\\d+$",
                                  "error_msg": "Input parameter error"
                              }
                          },
                          "query_params": {}
                      },
                      "outputs": {
                          "code": 200,
                          "msg": "msg",
                          "data": {
                              "id": 1,
                              "name": "name",
                              "des": "description",
                              "created_at": "2019-04-28 11:11:11",
                              "updated_at": "2019-04-28 11:11:11"
                          }
                      }
                  },
                  "view": {
                      "summary": "The view action's summary",
                      "description": "The action's description",
                      "method": "get",
                      "uri": "/{controller}/{id}",
                      "logs": {
                            [window.getCurentTime()]: "add action"
                      },
                      "inputs": {
                          "body_params": {},
                          "path_params": {
                              "id": {
                                  "des": "Id",
                                  "required": true,
                                  "eg": "name",
                                  "rules": "^\\d+$",
                                  "error_msg": "Input parameter error"
                              }
                          },
                          "query_params": {}
                      },
                      "outputs": {
                          "code": 200,
                          "msg": "msg",
                          "data": {
                              "id": 1,
                              "name": "name",
                              "des": "desdescription",
                              "created_at": "2019-04-28 11:11:11",
                              "updated_at": "2019-04-28 11:11:11"
                          }
                      }
                  },
                  "delete": {
                      "summary": "The delete action's summary",
                      "description": "The action's description",
                      "method": "delete",
                      "uri": "/{controller}/{id}",
                      "logs": {
                            [window.getCurentTime()]: "add action"
                      },
                      "inputs": {
                          "body_params": {},
                          "path_params": {
                              "id": {
                                  "des": "Id",
                                  "required": true,
                                  "eg": "name",
                                  "rules": "^\\d+$",
                                  "error_msg": "Input parameter error"
                              }
                          },
                          "query_params": {}
                      },
                      "outputs": {
                          "code": 200,
                          "msg": "msg",
                          "data": {
                              "id": 1
                          }
                      }
                  },
                  "index": {
                      "summary": "The index action's summary",
                      "description": "The action's description",
                      "method": "get",
                      "uri": "/{controller}",
                      "logs": {
                            [window.getCurentTime()]: "add action"
                      },
                      "inputs": {
                          "body_params": {},
                          "path_params": {},
                          "query_params": {
                              "name": {
                                  "des": "Name",
                                  "required": false,
                                  "eg": "n1",
                                  "rules": "^.{0,32}$",
                                  "error_msg": "Input parameter error"
                              },
                              "des": {
                                  "des": "Description",
                                  "required": false,
                                  "eg": "description",
                                  "rules": "^.{0,32}$",
                                  "error_msg": "Input parameter error"
                              }
                          }
                      },
                      "outputs": {
                          "code": 200,
                          "msg": "msg",
                          "data": {
                              "total": 9,
                              "page": 1,
                              "page_size": 20,
                              "items": [{
                                  "id": 0,
                                  "name": "n0",
                                  "des": "d0",
                                  "created_at": "2019-04-28 11:11:11",
                                  "updated_at": "2019-04-28 11:11:11"
                              }, {
                                  "id": 1,
                                  "name": "n1",
                                  "des": "d1",
                                  "created_at": "2019-04-28 11:11:11",
                                  "updated_at": "2019-04-28 11:11:11"
                              }, {
                                  "id": 2,
                                  "name": "n2",
                                  "des": "d2",
                                  "created_at": "2019-04-28 11:11:11",
                                  "updated_at": "2019-04-28 11:11:11"
                              }]
                          }
                      }
                  },
                  "export": {
                      "summary": "The export action's summary",
                      "description": "The action's description",
                      "method": "get",
                      "uri": "/{controller}/export",
                      "logs": {
                            [window.getCurentTime()]: "add action"
                      },
                      "inputs": {
                          "body_params": {},
                          "path_params": {},
                          "query_params": {
                              "name": {
                                  "des": "Name",
                                  "required": false,
                                  "eg": "n1",
                                  "rules": "^.{0,32}$",
                                  "error_msg": "Input parameter error"
                              },
                              "des": {
                                  "des": "Description",
                                  "required": false,
                                  "eg": "description",
                                  "rules": "^.{0,32}$",
                                  "error_msg": "Input parameter error"
                              }
                          }
                      },
                      "outputs": {
                          "code": 200,
                          "msg": "msg",
                          "data": {
                              "url": "/export.xsl"
                          }
                      }
                  },
                  "custom": {
                      "summary": "The custom action's summary",
                      "description": "The action's description",
                      "method": "patch",
                      "uri": "/{controller}/{id}/custom",
                      "logs": {
                            [window.getCurentTime()]: "add action"
                      },
                      "inputs": {
                          "body_params": {
                              "name": {
                                  "des": "Name",
                                  "required": false,
                                  "eg": "rename",
                                  "rules": "^.{0,32}$",
                                  "error_msg": "Input parameter error"
                              }
                          },
                          "path_params": {
                              "id": {
                                  "des": "Id",
                                  "required": true,
                                  "eg": 1,
                                  "rules": "^\\d{0,32}$",
                                  "error_msg": "Input parameter error"
                              }
                          },
                          "query_params": {}
                      },
                      "outputs": {
                          "code": 200,
                          "msg": "msg",
                          "data": {
                              "id": 1,
                              "name": "rename",
                              "des": "description",
                              "created_at": "2019-04-28 11:11:11",
                              "updated_at": "2019-04-28 11:11:11"
                          }
                      }
                  }
              }
          }
      },
      {
          text: 'param',
          title: 'Insert a param node',
          className: 'jsoneditor-append jsoneditor-default',
          field: '',
          value: {
              "des": "user name",
              "required": false,
              "eg": "myzero1",
              "rules": "^.{0,32}$",
              "error_msg": "Input parameter error"
          }
      },
      {
          text: 'create',
          title: 'Insert a action node',
          className: 'jsoneditor-append jsoneditor-default',
          field: '',
          value: {
              "summary": "The create action's summary",
              "description": "The create action's description",
              "method": "post",
              "uri": "/{controller}",
              "logs": {
                    [window.getCurentTime()]: "add action"
              },
              "inputs": {
                  "body_params": {
                      "name": {
                          "des": "Name",
                          "required": true,
                          "eg": "name",
                          "rules": "^.{0,32}$",
                          "error_msg": "Input parameter error"
                      },
                      "des": {
                          "des": "Description",
                          "required": false,
                          "eg": "description",
                          "rules": "^.{0,32}$",
                          "error_msg": "Input parameter error"
                      }
                  },
                  "path_params": {},
                  "query_params": {}
              },
              "outputs": {
                  "code": 200,
                  "msg": "msg",
                  "data": {
                      "id": 1,
                      "name": "name",
                      "des": "description",
                      "created_at": "2019-04-28 11:11:11",
                      "updated_at": "2019-04-28 11:11:11"
                  }
              }
          }
      },
      {
          text: 'update',
          title: 'Insert a action node',
          className: 'jsoneditor-append jsoneditor-default',
          field: '',
          value: {
              "summary": "The update action's summary",
              "description": "The update action's description",
              "method": "put",
              "uri": "/{controller}/{id}",
              "logs": {
                    [window.getCurentTime()]: "add action"
              },
              "inputs": {
                  "body_params": {
                      "name": {
                          "des": "Name",
                          "required": false,
                          "eg": "name",
                          "rules": "^.{0,32}$",
                          "error_msg": "Input parameter error"
                      },
                      "des": {
                          "des": "Description",
                          "required": false,
                          "eg": "description",
                          "rules": "^.{0,32}$",
                          "error_msg": "Input parameter error"
                      }
                  },
                  "path_params": {
                      "id": {
                          "des": "Id",
                          "required": true,
                          "eg": 1,
                          "rules": "^\\d{0,32}$",
                          "error_msg": "Input parameter error"
                      }
                  },
                  "query_params": {}
              },
              "outputs": {
                  "code": 200,
                  "msg": "msg",
                  "data": {
                      "id": 1,
                      "name": "name",
                      "des": "description",
                      "created_at": "2019-04-28 11:11:11",
                      "updated_at": "2019-04-28 11:11:11"
                  }
              }
          }
      },
      {
          text: 'view',
          title: 'Insert a action node',
          className: 'jsoneditor-append jsoneditor-default',
          field: '',
          value: {
              "summary": "The view action's summary",
              "description": "The view action's description",
              "method": "get",
              "uri": "/{controller}/{id}",
              "logs": {
                    [window.getCurentTime()]: "add action"
              },
              "inputs": {
                  "body_params": {},
                  "path_params": {
                      "id": {
                          "des": "Id",
                          "required": true,
                          "eg": 1,
                          "rules": "^\\d{0,32}$",
                          "error_msg": "Input parameter error"
                      }
                  },
                  "query_params": {}
              },
              "outputs": {
                  "code": 200,
                  "msg": "msg",
                  "data": {
                      "id": 1,
                      "name": "name",
                      "des": "desdescription",
                      "created_at": "2019-04-28 11:11:11",
                      "updated_at": "2019-04-28 11:11:11"
                  }
              }
          }
      },
      {
          text: 'delete',
          title: 'Insert a action node',
          className: 'jsoneditor-append jsoneditor-default',
          field: '',
          value: {
              "summary": "The delete action's summary",
              "description": "The delete action's description",
              "method": "delete",
              "uri": "/{controller}/{id}",
              "logs": {
                    [window.getCurentTime()]: "add action"
              },
              "inputs": {
                  "body_params": {},
                  "path_params": {
                      "id": {
                          "des": "Id",
                          "required": true,
                          "eg": 1,
                          "rules": "^\\d{0,32}$",
                          "error_msg": "Input parameter error"
                      }
                  },
                  "query_params": {}
              },
              "outputs": {
                  "code": 200,
                  "msg": "msg",
                  "data": {
                      "id": 1
                  }
              }
          }
      },
      {
          text: 'index',
          title: 'Insert a action node',
          className: 'jsoneditor-append jsoneditor-default',
          field: '',
          value: {
              "summary": "The index action's summary",
              "description": "The index action's description",
              "method": "get",
              "uri": "/{controller}",
              "logs": {
                    [window.getCurentTime()]: "add action"
              },
              "inputs": {
                  "body_params": {},
                  "path_params": {},
                  "query_params": {
                      "name": {
                          "des": "Name",
                          "required": false,
                          "eg": "n1",
                          "rules": "^.{0,32}$",
                          "error_msg": "Input parameter error"
                      },
                      "des": {
                          "des": "Description",
                          "required": false,
                          "eg": "description",
                          "rules": "^.{0,32}$",
                          "error_msg": "Input parameter error"
                      }
                  }
              },
              "outputs": {
                  "code": 200,
                  "msg": "msg",
                  "data": {
                      "total": 9,
                      "page": 1,
                      "page_size": 20,
                      "items": [{
                          "id": 0,
                          "name": "n0",
                          "des": "d0",
                          "created_at": "2019-04-28 11:11:11",
                          "updated_at": "2019-04-28 11:11:11"
                      }, {
                          "id": 1,
                          "name": "n1",
                          "des": "d1",
                          "created_at": "2019-04-28 11:11:11",
                          "updated_at": "2019-04-28 11:11:11"
                      }, {
                          "id": 2,
                          "name": "n2",
                          "des": "d2",
                          "created_at": "2019-04-28 11:11:11",
                          "updated_at": "2019-04-28 11:11:11"
                      }]
                  }
              }
          }
      },
      {
          text: 'export',
          title: 'Insert a action node',
          className: 'jsoneditor-append jsoneditor-default',
          field: '',
          value: {
              "summary": "The export action's summary",
              "description": "The export action's description",
              "method": "get",
              "uri": "/{controller}/export",
              "logs": {
                    [window.getCurentTime()]: "add action"
              },
              "inputs": {
                  "body_params": {},
                  "path_params": {},
                  "query_params": {
                      "name": {
                          "des": "Name",
                          "required": false,
                          "eg": "n1",
                          "rules": "^.{0,32}$",
                          "error_msg": "Input parameter error"
                      },
                      "des": {
                          "des": "Description",
                          "required": false,
                          "eg": "description",
                          "rules": "^.{0,32}$",
                          "error_msg": "Input parameter error"
                      }
                  }
              },
              "outputs": {
                  "code": 200,
                  "msg": "msg",
                  "data": {
                      "url": "/export.xsl"
                  }
              }
          }
      },
      {
          text: 'custom',
          title: 'Insert a action node',
          className: 'jsoneditor-append jsoneditor-default',
          field: '',
          value: {
              "summary": "The custom action's summary",
              "description": "The custom action's description",
              "method": "patch",
              "uri": "/{controller}/{id}/custom",
              "logs": {
                    [window.getCurentTime()]: "add action"
              },
              "inputs": {
                  "body_params": {
                      "name": {
                          "des": "Name",
                          "required": false,
                          "eg": "rename",
                          "rules": "^.{0,32}$",
                          "error_msg": "Input parameter error"
                      }
                  },
                  "path_params": {
                      "id": {
                          "des": "Id",
                          "required": true,
                          "eg": 1,
                          "rules": "^\\d{0,32}$",
                          "error_msg": "Input parameter error"
                      }
                  },
                  "query_params": {}
              },
              "outputs": {
                  "code": 200,
                  "msg": "msg",
                  "data": {
                      "id": 1,
                      "name": "rename",
                      "des": "description",
                      "created_at": "2019-04-28 11:11:11",
                      "updated_at": "2019-04-28 11:11:11"
                  }
              }
          }
      },
      {
          text: 'output',
          title: 'Insert a output node',
          className: 'jsoneditor-append jsoneditor-default',
          field: '',
          value: {
                "code": "735200",
                "msg": "ok",
                "data": {
                    "dataTitle": "dataVal"
                }
          }
      },
      {
          text: 'log',
          title: 'Insert a log node',
          className: 'jsoneditor-append jsoneditor-default',
          field: window.curentTime,
          value: "add a log"
      },
  ];

var schemas = {
    "schema": {
        "title": "Restfull api configuration",
        "type": "object",
        "required": ["swagger", "info"],
        "properties": {
            "swagger": {
                "title": "swagger version",
                "description": "It can not edit.",
                "type": ["number", "string"],
                "examples": ["2.0"]
            },
            "info": {
                "title": "Info description",
                "type": "object",
                "required": ["description", "version", "title", "termsOfService", "contact", "license"],
                "properties": {
                    "description": {
                        "type": ["number", "string"],
                        "examples": ["This is a sample server Petstore server. You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters."]
                    },
                    "version": {
                        "title": "The api version",
                        "type": ["number", "string"],
                        "examples": ["1.0.0", "1.0.1", "v1"]
                    },
                    "title": {
                        "title": "Api title",
                        "type": ["number", "string"],
                        "examples": ["Create restfull api by conf.", "Swagger Petstore"]
                    },
                    "termsOfService": {
                        "title": "The terms of service",
                        "type": ["number", "string"],
                        "examples": ["https://github.com/myzero1/yii2-apibyconf", "http://swagger.io/terms/"]
                    },
                    "contact": {
                        "title": "contact description",
                        "type": "object",
                        "required": ["email"],
                        "properties": {
                            "email": {
                                "title": "email",
                                "description": "The contact email",
                                "type": ["number", "string"],
                                "format": "email",
                                "examples": ["myzero1@sina.com", "apiteam@swagger.io"]
                            }
                        }
                    },
                    "license": {
                        "title": "contact description",
                        "type": "object",
                        "required": ["name", "url"],
                        "properties": {
                            "name": {
                                "type": ["number", "string"],
                                "examples": ["Apache 2.0"]
                            },
                            "url": {
                                "type": ["number", "string"],
                                "pattern": "[a-zA-z]+://[^\\s]*",
                                "examples": ["http://www.apache.org/licenses/LICENSE-2.0.html"]
                            }
                        }
                    }
                }
            },
            "host": {
                "type": ["number", "string"],
                "format": "hostname",
                "examples": ["petstore.swagger.io", "github.com"]
            },
            "restModuleName": {
                "type": ["string"],
                "pattern": "^[a-zA-Z]\\w*$",
                "examples": ["v1"]
            },
            "restModuleNamespace": {
                "type": ["string"],
                "pattern": "^[a-zA-Z][\\w\\\\]*$",
                "examples": ["backend\\modules\\v1"]
            },
            "restModuleAliasPath": {
                "type": ["string"],
                "pattern": "^@[a-zA-Z][\\w\\/-]*$",
                "examples": ["@backend/modules/v1"]
            },
            "restModuleAlias": {
                "type": ["string"],
                "pattern": "^[a-zA-Z]\\w*$",
                "examples": ["v1"]
            },
            "externalDocs": {
                "title": "externalDocs description",
                "type": "object",
                "required": ["description", "url"],
                "properties": {
                    "description": {
                        "type": ["number", "string"],
                        "examples": ["e about Swagger"]
                    },
                    "url": {
                        "type": ["number", "string"],
                        "pattern": "[a-zA-z]+://[^\\s]*",
                        "examples": ["http://www.apache.org/licenses/LICENSE-2.0.html"]
                    }
                }
            },
            "schemes": {
                "title": "schemes",
                "enum": ["https", "http"]
            },
            "mySecurity": {
                "title": "mySecurity description",
                "type": "object",
                "required": ["security"],
                "properties": {
                    "security": {
                        "title": "security",
                        "enum": ["noAuthenticator","queryParamAuth","httpBasicAuth", "httpBearerAuth"]
                    }
                }
            },
            "myGroup": {
                "title": "myGroup description",
                "type": "object",
                "required": ["currentUser"],
                "properties": {
                    "currentUser": {
                        "title": "currentUser",
                        "enum": [
                            "admin",
                            "userA",
                        ]
                    }
                }
            },
            "securityDefinitions": {
                "title": "securityDefinitions description",
                "type": "object",
                "required": ["api_key"],
                "properties": {
                    "api_key": {
                        "title": "api_key description",
                        "type": "object",
                        "required": ["type", "name"],
                        "properties": {
                            "type": {
                                "type": ["number", "string"],
                                "examples": ["apiKey"]
                            },
                            "in": {
                                "type": ["number", "string"],
                                "examples": ["header"]
                            },
                            "name": {
                                "type": ["number", "string"],
                                "examples": ["api_key"]
                            }
                        }
                    }
                }
            },
            "controllers": {
                "$ref": "controllers"
            }
        }
    },
    "controllers": {
        "title": "apibyconf-obj-controllers",
        "type": "object",
        "required": [],
        "properties": {
            "controller": {
                "$ref": "controller"
            },
            "demo": {
                "$ref": "controller"
            }
        }
    },
    "controller": {
        "title": "apibyconf-obj-controller",
        "type": "object",
        "required": ["description", "actions"],
        "properties": {
            "description": {
                "type": ["number", "string"],
                "examples": ["user", "log"]
            },
            "actions": {
                "$ref": "actions"
            }
        }
    },
    "actions": {
        "title": "actions description",
        "type": "object",
        "required": [],
        "properties": {
            "index": {
                "$ref": "action"
            },
            "create": {
                "$ref": "action"
            },
            "update": {
                "$ref": "action"
            },
            "view": {
                "$ref": "action"
            },
            "delete": {
                "$ref": "action"
            },
            "export": {
                "$ref": "action"
            },
            "custom": {
                "$ref": "action"
            }
        }
    },
    "action": {
        "title": "apibyconf-obj-action",
        "type": "object",
        "required": [],
        "properties": {
            "summary": {
                "type": ["number", "string"],
                "examples": ["action's summary"]
            },
            "description": {
                "type": ["number", "string"],
                "examples": ["description's summary"]
            },
            "method": {
                "title": "method",
                "enum": ["post", "get", "put", "delete", "patch", "options"]
            },
            "logs": {
                "$ref": "logs"
            },
            "inputs": {
                "$ref": "inputs"
            },
            "outputs": {
                "$ref": "outputs"
            }
        }
    },
    "inputs": {
        "title": "apibyconf-obj-inputs",
        "type": "object",
        "required": ["body_params", "path_params", "query_params"],
        "properties": {
            "query_params": {
                "$ref": "query_params"
            },
            "body_params": {
                "$ref": "body_params"
            },
            "path_params": {
                "$ref": "path_params"
            }
        }
    },
    "body_params": {
        "title": "apibyconf-obj-inputs-body",
        "type": "object",
        "required": [],
        "properties": {
            "param": {
                "$ref": "param"
            },
            "name": {
                "$ref": "param"
            },
            "des": {
                "$ref": "param"
            },
            "status": {
                "$ref": "param"
            }
        }
    },
    "path_params": {
        "title": "apibyconf-obj-inputs-path",
        "type": "object",
        "required": [],
        "properties": {
            "param": {
                "$ref": "param"
            },
            "id": {
                "$ref": "param"
            },
            "name": {
                "$ref": "param"
            }
        }
    },
    "query_params": {
        "title": "apibyconf-obj-inputs-query",
        "type": "object",
        "required": [],
        "properties": {
            "param": {
                "$ref": "param"
            },
            "name": {
                "$ref": "param"
            },
            "des": {
                "$ref": "param"
            },
            "": {
                "$ref": "param"
            },
            "created_at": {
                "$ref": "param"
            },
            "updated_at": {
                "$ref": "param"
            }
        }
    },
    "param": {
        "title": "apibyconf-obj-input",
        "type": "object",
        "required": ["des", "required", "eg", "rules", "error_msg"],
        "properties": {
            "des": {
                "type": ["string", "number"],
                "examples": ["user name"]
            },
            "required": {
                "type": "boolean",
                "default": false
            },
            "eg": {
                "type": ["string", "number"],
                "examples": ["myzero1"]
            },
            "rules": {
                "type": ["number", "string"],
                "examples": [
                    "input `regular expression` will use `math` validator, eg:^\\w{1,32}$",
                    "input `safe` will use `safe` validator"
                ]
            },
            "error_msg": {
                "type": ["number", "string"],
                "examples": ["Input parameter error"]
            }
        }
    },
    "outputs": {
        "title": "apibyconf-obj-outputs",
        "type": "object",
        "required": ["735200"],
        "properties": {
            "735200": {
                "$ref": "output"
            }
        }
    },
    "output": {
        "title": "apibyconf-obj-output",
        "type": "object",
        "required": ["code", "msg", "data"],
        "properties": {
            "code": {
                "type": ["number", "string"],
                "examples": ["200 success"]
            },
            "msg": {
                "type": ["string"],
                "examples": ["myzero1"]
            },
            "data": {
                "type": "object"
            }
        }
    },
    "logs": {
        "title": "apibyconf-obj-logs",
        "type": "object",
        "required": [],
        "properties": {
            [window.curentTime]: {
                "$ref": "log"
            }
        }
    },
    "log": {
        "title": "apibyconf-obj-log",
        "type": ["number", "string"]
    },
};