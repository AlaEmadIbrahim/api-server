// lab 04 Create a Collection Class that accepts a Sequelize Model into the constructor and assigns it as this.model

class Collection {
  constructor(model) {
    this.model = model;
  }

  // create()
  async create(obj) {
    try {
      let newRecord = await this.model.create(obj);
      return newRecord;
    } catch (error) {
      console.error(
        "Somthing is going wrong when creating a new record in model : ",
        this.model
      );
      console.log(error);
    }
  }
  
  // read()
  async get(recordId) {
    try {
      let record = null;
      if (!recordId) {
        record = await this.model.findAll();
        return record;
      } else {
        record = await this.model.findOne({ where: { id: recordId } });
        return record;
      }
    } catch (error) {
      console.error(
        "Somthing is going wrong when Reading records in model : ",
        this.model
      );
      console.log(error);
    }
  }

  // update()
  async update(obj) {
    try {
      let updated = await record.update(obj);
      return updated;
    } catch (error) {
      console.error(
        "Somthing is going wrong when Updating a record in model : ",
        this.model
      );
      console.log(error);
    }
  }

  //delete()
  async delete(recordId) {
    if (!recordId) {
      throw new Error("no id provided for model ", this.model);
    }
    try {
      let deleted = await this.model.destroy({ where: { id: recordId } });
      return deleted;
    } catch (error) {
      console.error(
        "Somthing is going wrong when Deleting a record in model : ",
        this.model
      );
      console.log(error);
    }
  }
}

module.exports = Collection;
